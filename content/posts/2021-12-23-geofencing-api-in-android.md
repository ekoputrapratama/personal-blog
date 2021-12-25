---
title: Geofencing API In Android
date: 2021-12-23T17:46:04.217Z
featuredimage: ../assets/screenshot_20211224_014931.jpg
excerpt: Geofencing is a feature in android that allow you to react to an event
  when the user enter or exit a specific area. This feature have been used by
  google in their Google Maps application and you should be familiar with it,
  when you in some area that have a POI(Point Of Interest) in Google Maps it
  will send you a notification when you enter that area and if you click on it
  the application will ask you some questions about those place.
tags:
  - android
  - geofence
  - geofencing
  - kotlin
---
*Note : This article is still in progress and most of the part is incomplete.*

Geofencing is a feature in android that allow you to react to an event when the user enter or exit a specific area. This feature have been used by google in their Google Maps application and you should be familiar with it, when you in some area that have a POI(Point Of Interest) in Google Maps it will send you a notification when you enter that area and if you click on it the application will ask you some questions about those place.

Here we will try to imitate that feature but with our own message and POI. Wihout further ado let's try to make it.

First you need to get a Google Maps API key to use it's feature in Android.

1. Open Google Cloud Platform and [create a new project](https://console.cloud.google.com/projectcreate)

   ![Create Google Cloud Project](../assets/2021-12-24-03_00_33-new-project-–-google-cloud-platform.png "Create Google Cloud Project")

   Feel free to leave the *Project Name* as is or change it as you like, and then click **Create**.
2. Open the menu by clicking 3 lines icon on the top left corner and select **APIs & Services** > **Library** 

   ![APIs & Services](../assets/2021-12-24-03_07_55-home-–-nerdiex-–-google-cloud-platform.png "APIs & Services")
3. Select **Maps SDK for Android**

   ![Maps SDK for Android](../assets/2021-12-24-03_12_16-api-library-–-apis-services-–-nerdiex-–-google-cloud-platform.png "Maps SDK for Android")
4. Click Enable, or Manage if it's already enabled.

   ![Enable Maps API](../assets/enable-maps-sdk-650x300.png "Enable Maps API")
5. Select **Credential** on the left menu and click **Create Credential** button and select **API key**

   ![Create Credential Google Maps](../assets/create-credential.png "Create Credential Google Maps")

   ![Google Maps Select API key](../assets/select-api-key.png "Google Maps Select API key")

   Save that API key because it will be used later in you anroid project.

Now create a new project in Android Studio, and select Basic Activity template in Android Studio. And then you need to create a new kotlin file named AndroidGeofenceApp.kt with the content like below

```kotlin
package com.muhammadsayuti.androidgeofencing

import android.app.Application

class AndroidGeofencingApp : Application() {

    private lateinit var repository: ReminderRepository

    override fun onCreate() {
        super.onCreate()
        repository = ReminderRepository(this)
    }

    fun getRepository() = repository
}
```

Next you need to use this AndroidGeofencingApp in application, add required permissions, activity, receiver, service and your Google Maps API key in AndroidManifest.xml file.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.muhammadsayuti.androidgeofencing">

  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
  <uses-permission android:name="android.permission.INTERNET" />

  <application
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:supportsRtl="true"
    android:theme="@style/Theme.AndroidGeofencing"
    android:name=".AndroidGeofencingApp">
    <activity
      android:name=".MainActivity"
      android:exported="true"
      android:label="@string/app_name"
      android:theme="@style/Theme.AndroidGeofencing.NoActionBar">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />

        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>
    <activity android:name=".NewReminderActivity" />
    <receiver
      android:name=".GeofenceBroadcastReceiver"
      android:enabled="true"
      android:exported="true" />
    <service
      android:name=".GeofenceJobIntentService"
      android:exported="true"
      android:permission="android.permission.BIND_JOB_SERVICE" />
    <meta-data
      android:name="com.google.android.geo.API_KEY"
      android:value="YOUR_API_KEY" />
  </application>

</manifest>
```

Next add some dependencies that we will use later in your app build.gradle.

```groovy
implementation 'com.google.android.gms:play-services-maps:18.0.0'
implementation 'com.google.android.gms:play-services-location:18.0.0'
implementation 'com.karumi:dexter:4.2.0'
implementation 'com.google.code.gson:gson:2.8.6'
```

After that create a new file called Reminder.kt with the content like below.

```kotlin
package com.muhammadsayuti.androidgeofencing

import com.google.android.gms.maps.model.LatLng
import java.util.*

data class Reminder(val id: String = UUID.randomUUID().toString(),
                    var latLng: LatLng?,
                    var radius: Double?,
                    var message: String?)
```

Next we need to create a file to add or remove geofencing, in this tutorial i only use SharedPreference as a storage to save all geofencing as json string.
Create file called ReminderRepository.kt with the content like below

```kotlin
package com.muhammadsayuti.androidgeofencing

import android.Manifest
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.util.Log
import androidx.core.content.ContextCompat
import com.google.android.gms.location.Geofence
import com.google.android.gms.location.GeofencingRequest
import com.google.android.gms.location.LocationServices
import com.google.android.gms.tasks.OnSuccessListener
import com.google.gson.Gson


class ReminderRepository(private val context: Context) {

  companion object {
    private const val PREFS_NAME = "ReminderRepository"
    private const val REMINDERS = "REMINDERS"
  }

  private val preferences = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
  private val gson = Gson()
  private val geofencingClient = LocationServices.getGeofencingClient(context)
  private val geofencePendingIntent: PendingIntent by lazy {
    val intent = Intent(context, GeofenceBroadcastReceiver::class.java)
    PendingIntent.getBroadcast(
      context,
      0,
      intent,
      PendingIntent.FLAG_UPDATE_CURRENT
    )
  }

  fun add(
    reminder: Reminder,
    success: () -> Unit,
    failure: (error: String) -> Unit
  ) {

    val geofence = buildGeofence(reminder)
    if (geofence != null
      && ContextCompat.checkSelfPermission(
        context,
        Manifest.permission.ACCESS_FINE_LOCATION
      ) == PackageManager.PERMISSION_GRANTED
    ) {
      geofencingClient
        .addGeofences(buildGeofencingRequest(geofence), geofencePendingIntent)
        .addOnSuccessListener {
          saveAll(getAll() + reminder)
          success()
        }
        .addOnFailureListener {
          failure(GeofenceErrorMessages.getErrorString(context, it))
        }
    }
  }

  private fun buildGeofence(reminder: Reminder): Geofence? {
    val latitude = reminder.latLng?.latitude
    val longitude = reminder.latLng?.longitude
    val radius = reminder.radius

    if (latitude != null && longitude != null && radius != null) {
      return Geofence.Builder()
        .setRequestId(reminder.id)
        .setCircularRegion(
          latitude,
          longitude,
          radius.toFloat()
        )
        .setTransitionTypes(Geofence.GEOFENCE_TRANSITION_ENTER)
        .setExpirationDuration(Geofence.NEVER_EXPIRE)
        .build()
    }

    return null
  }

  private fun buildGeofencingRequest(geofence: Geofence): GeofencingRequest {
    return GeofencingRequest.Builder()
      .setInitialTrigger(0)
      .addGeofences(listOf(geofence))
      .build()
  }

  fun remove(
    reminder: Reminder,
    success: () -> Unit,
    failure: (error: String) -> Unit
  ) {
    geofencingClient
      .removeGeofences(listOf(reminder.id))
      .addOnSuccessListener {
        saveAll(getAll() - reminder)
        success()
      }
      .addOnFailureListener {
        failure(GeofenceErrorMessages.getErrorString(context, it))
      }
  }

  private fun saveAll(list: List<Reminder>) {
    preferences
      .edit()
      .putString(REMINDERS, gson.toJson(list))
      .apply()
  }

  fun getAll(): List<Reminder> {
    if (preferences.contains(REMINDERS)) {
      val remindersString = preferences.getString(REMINDERS, null)
      val arrayOfReminders = gson.fromJson(
        remindersString,
        Array<Reminder>::class.java
      )
      if (arrayOfReminders != null) {
        return arrayOfReminders.toList()
      }
    }
    return listOf()
  }

  fun get(requestId: String?) = getAll().firstOrNull { it.id == requestId }

  fun getLast() = getAll().lastOrNull()

}
```