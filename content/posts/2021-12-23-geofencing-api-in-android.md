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



create a new project in Android Studio, and select Basic Activity template in Android Studio. Now you need to create a new kotlin file named AndroidGeofenceApp.kt with the content like below

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