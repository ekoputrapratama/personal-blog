import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import './style.scss';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <SEO title="Privacy Policy" />
      <Sidebar>
        <Link to={`/`}>Home</Link>
        <Link to={`/tags`}>All Tags</Link>
      </Sidebar>
      <main className="content animated slide-fadein">
        <h1>Privacy Policy</h1>

        <p>
          (“we,” “our,” or “us”) is committed to protecting your privacy. This
          Privacy Policy explains how your personal information is collected,
          used, and disclosed by Muhammad Sayuti.
        </p>
        <p>
          This Privacy Policy applies to our website, and its associated
          subdomains (collectively, our “Service”) alongside our application,
          Muhammad Sayuti. By accessing or using our Service, you signify that
          you have read, understood, and agree to our collection, storage, use,
          and disclosure of your personal information as described in this
          Privacy Policy.
        </p>
        <h2>Definitions and key terms</h2>
        <p>
          To help explain things as clearly as possible in this Privacy Policy,
          every time any of these terms are referenced, are strictly defined as:
        </p>
        <ul class="text-muted">
          <li>
            Cookie:&nbsp;small amount of data generated by a website and saved
            by your web browser. It is used to identify your browser, provide
            analytics, remember information about you such as your language
            preference or login information.
          </li>
          <li>
            Company: when this policy mentions “Company,” “we,” “us,” or “our,”
            it refers to Muhammad Sayuti, that is responsible for your
            information under this Privacy Policy.
          </li>
          <li>
            Country: where Muhammad Sayuti or the owners/founders of Muhammad
            Sayuti are based, in this case is Indonesia
          </li>
          <li>
            Customer:&nbsp;refers to the company, organization or person that
            signs up to use the Muhammad Sayuti Service to manage the
            relationships with your consumers or service users.
          </li>
          <li>
            Device:&nbsp;any internet connected device such as a phone, tablet,
            computer or any other device that can be used to visit Muhammad
            Sayuti and use the services.
          </li>
          <li>
            IP address: Every device connected to the Internet is assigned a
            number known as an Internet protocol (IP) address. These numbers are
            usually assigned in geographic blocks. An IP address can often be
            used to identify the location from which a device is connecting to
            the Internet.
          </li>
          <li>
            Personnel:&nbsp;refers to those individuals who are employed by
            Muhammad Sayuti or are under contract to perform a service on behalf
            of one of the parties.
          </li>
          <li>
            Personal Data: any information that directly, indirectly, or in
            connection with other information — including a personal
            identification number — allows for the identification or
            identifiability of a natural person.
          </li>
          <li>
            Service: refers to the service provided by Muhammad Sayuti as
            described in the relative terms (if available) and on this platform.{' '}
          </li>
          <li>
            Third-party service:&nbsp;refers to advertisers, contest sponsors,
            promotional and marketing partners, and others who provide our
            content or whose products or services we think may interest you.
          </li>
          <li>
            Website: Muhammad Sayuti’s site, which can be accessed via this URL:
            muhammadsayuti.web.app
          </li>
          <li>
            You: a person or entity that is registered with Muhammad Sayuti to
            use the Services.
          </li>
        </ul>

        <h2>Information automatically collected</h2>
        <p>
          There is some information like your Internet Protocol (IP) address
          and/or browser and device characteristics — is collected automatically
          when you visit our platform. This information may be used to connect
          your computer to the Internet. Other information collected
          automatically could be a login, e-mail address, password, computer and
          connection information such as browser plug-in types and versions and
          time zone setting, operating systems and platforms, purchase history,
          (we sometimes aggregate with similar information from other Users),
          the full Uniform Resource Locator (URL) clickstream to, through and
          from our Website that may include date and time; cookie number; parts
          of the site you viewed or searched for; and the phone number you used
          to call our Customer Services. We may also use browser data such as
          cookies, Flash cookies (also known as Flash Local Shared Objects) or
          similar data on certain parts of our Website for fraud prevention and
          other purposes. During your visits, we may use software tools such as
          JavaScript to measure and collect session information including page
          response times, download errors, length of visits to certain pages,
          page interaction information (such as scrolling, clicks, and
          mouse-overs), and methods used to browse away from the page. We may
          also collect technical information to help us identify your device for
          fraud prevention and diagnostic purposes.
        </p>
        <p>
          We automatically collect certain information when you visit, use or
          navigate the platform. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about who
          and when you use our and other technical information. This information
          is primarily needed to maintain the security and operation of our
          platform, and for our internal analytics and reporting purposes.
        </p>

        <h2>Sale of Business</h2>
        <p class="text-muted">
          We reserve the right to transfer information to a third party in the
          event of a sale, merger or other transfer of all or substantially all
          of the assets of Muhammad Sayuti or any of its Corporate Affiliates
          (as defined herein), or that portion of Muhammad Sayuti or any of its
          Corporate Affiliates to which the Service relates, or in the event
          that we discontinue our business or file a petition or have filed
          against us a petition in bankruptcy, reorganization or similar
          proceeding, provided that the third party agrees to adhere to the
          terms of this Privacy Policy.
        </p>

        <h2>Affiliates</h2>
        <p class="text-muted">
          We may disclose information (including personal information) about you
          to our Corporate Affiliates. For purposes of this Privacy Policy,
          "Corporate Affiliate" means any person or entity which directly or
          indirectly controls, is controlled by or is under common control with
          Muhammad Sayuti, whether by ownership or otherwise. Any information
          relating to you that we provide to our Corporate Affiliates will be
          treated by those Corporate Affiliates in accordance with the terms of
          this Privacy Policy.
        </p>

        <h2>Governing Law</h2>
        <p class="text-muted">
          This Privacy Policy is governed by the laws of Indonesia without
          regard to its conflict of laws provision. You consent to the exclusive
          jurisdiction of the courts in connection with any action or dispute
          arising between the parties under or in connection with this Privacy
          Policy except for those individuals who may have rights to make claims
          under Privacy Shield, or the Swiss-US framework.
        </p>
        <p class="text-muted">
          The laws of Indonesia, excluding its conflicts of law rules, shall
          govern this Agreement and your use of the website. Your use of the
          website may also be subject to other local, state, national, or
          international laws.
        </p>
        <p class="text-muted">
          By using Muhammad Sayuti or contacting us directly, you signify your
          acceptance of this Privacy Policy. If you do not agree to this Privacy
          Policy, you should not engage with our website, or use our services.
          Continued use of the website, direct engagement with us, or following
          the posting of changes to this Privacy Policy that do not
          significantly affect the use or disclosure of your personal
          information will mean that you accept those changes.
        </p>

        <h2>Your Consent</h2>
        <p class="text-muted">
          We've updated our&nbsp;Privacy Policy&nbsp;to provide you with
          complete transparency into what is being set when you visit our site
          and how it's being used. By using our Muhammad Sayuti, registering an
          account, or making a purchase, you hereby consent to our Privacy
          Policy and agree to its terms.
        </p>

        <h2>Links to Other Websites</h2>
        <p class="text-muted">
          This Privacy Policy applies only to the Services. The Services may
          contain links to other websites not operated or controlled by Muhammad
          Sayuti. We are not responsible for the content, accuracy or opinions
          expressed in such websites, and such websites are not investigated,
          monitored or checked for accuracy or completeness by us. Please
          remember that when you use a link to go from the Services to another
          website, our Privacy Policy is no longer in effect. Your browsing and
          interaction on any other website, including those that have a link on
          our platform, is subject to that website’s own rules and policies.
          Such third parties may use their own cookies or other methods to
          collect information about you.
        </p>

        <h2>Advertising</h2>
        <p class="text-muted">
          This website may contain third party advertisements and links to third
          party sites. Muhammad Sayuti does not make any representation as to
          the accuracy or suitability of any of the information contained in
          those advertisements or sites and does not accept any responsibility
          or liability for the conduct or content of those advertisements and
          sites and the offerings made by the third parties.
        </p>
        <p class="text-muted">
          Advertising keeps Muhammad Sayuti and many of the websites and
          services you use free of charge. We work hard to make sure that ads
          are safe, unobtrusive, and as relevant as possible.
        </p>
        <p class="text-muted">
          Third party advertisements and links to other sites where goods or
          services are advertised are not endorsements or recommendations by
          Muhammad Sayuti of the third party sites, goods or services. Muhammad
          Sayuti takes no responsibility for the content of any of the ads,
          promises made, or the quality/reliability of the products or services
          offered in all advertisements.
        </p>

        <h2>Cookies for Advertising</h2>
        <p class="text-muted">
          These cookies collect information over time about your online activity
          on the website and other online services to make online advertisements
          more relevant and effective to you. This is known as interest-based
          advertising. They also perform functions like preventing the same ad
          from continuously reappearing and ensuring that ads are properly
          displayed for advertisers. Without cookies, it’s really hard for an
          advertiser to reach its audience, or to know how many ads were shown
          and how many clicks they received.
        </p>

        <h2>Cookies</h2>
        <p class="text-muted">
          Muhammad Sayuti uses "Cookies" to identify the areas of our website
          that you have visited. A Cookie is a small piece of data stored on
          your computer or mobile device by your web browser. We use Cookies to
          enhance the performance and functionality of our website but are
          non-essential to their use. However, without these cookies, certain
          functionality like videos may become unavailable or you would be
          required to enter your login details every time you visit the website
          as we would not be able to remember that you had logged in previously.
          Most web browsers can be set to disable the use of Cookies. However,
          if you disable Cookies, you may not be able to access functionality on
          our website correctly or at all. We never place Personally
          Identifiable Information in Cookies.
        </p>

        <h2>Blocking and disabling cookies and similar technologies</h2>
        <p class="text-muted">
          Wherever you're located you may also set your browser to block cookies
          and similar technologies, but this action may block our essential
          cookies and prevent our website from functioning properly, and you may
          not be able to fully utilize all of its features and services. You
          should also be aware that you may also lose some saved information
          (e.g. saved login details, site preferences) if you block cookies on
          your browser. Different browsers make different controls available to
          you. Disabling a cookie or category of cookie does not delete the
          cookie from your browser, you will need to do this yourself from
          within your browser, you should visit your browser's help menu for
          more information.
        </p>

        <h2>Remarketing Services</h2>
        <p class="text-muted">
          We use remarketing services. What Is Remarketing? In digital
          marketing, remarketing (or retargeting) is the practice of serving ads
          across the internet to people who have already visited your website.
          It allows your company to seem like they're “following” people around
          the internet by serving ads on the websites and platforms they use
          most.
        </p>

        <h2>Kids' Privacy</h2>
        <p class="text-muted">
          We do not address anyone under the age of 13. We do not knowingly
          collect personally identifiable information from anyone under the age
          of 13. If You are a parent or guardian and You are aware that Your
          child has provided Us with Personal Data, please contact Us. If We
          become aware that We have collected Personal Data from anyone under
          the age of 13 without verification of parental consent, We take steps
          to remove that information from Our servers.
        </p>

        <h2>Changes To Our Privacy Policy</h2>
        <p class="text-muted">
          We may change our Service and policies, and we may need to make
          changes to this Privacy Policy so that they accurately reflect our
          Service and policies. Unless otherwise required by law, we will notify
          you (for example, through our Service) before we make changes to this
          Privacy Policy and give you an opportunity to review them before they
          go into effect. Then, if you continue to use the Service, you will be
          bound by the updated Privacy Policy. If you do not want to agree to
          this or any updated Privacy Policy, you can delete your account.
        </p>

        <h2>Third-Party Services</h2>
        <p class="text-muted">
          We may display, include or make available third-party content
          (including data, information, applications and other products
          services) or provide links to third-party websites or services
          ("Third- Party Services").
        </p>
        <p class="text-muted">
          You acknowledge and agree that Muhammad Sayuti shall not be
          responsible for any Third-Party Services, including their accuracy,
          completeness, timeliness, validity, copyright compliance, legality,
          decency, quality or any other aspect thereof. Muhammad Sayuti does not
          assume and shall not have any liability or responsibility to you or
          any other person or entity for any Third-Party Services.
        </p>
        <p class="text-muted">
          Third-Party Services and links thereto are provided solely as a
          convenience to you and you access and use them entirely at your own
          risk and subject to such third parties' terms and conditions.
        </p>

        <h2>Tracking Technologies</h2>
        <ul style={{ marginLeft: '10px' }}>
          <br />
          <li>
            Google Maps API
            <br />
            <br />
            <p class="text-muted">
              Google Maps API&nbsp;is a robust tool that can be used to create a
              custom&nbsp;map, a searchable&nbsp;map, check-in functions,
              display live data synching with location, plan routes, or create a
              mashup just to name a few.
            </p>
            <p class="text-muted">
              Google Maps API may collect information from You and from Your
              Device for security purposes.
            </p>
            <p class="text-muted">
              Google Maps API collects information that is held in accordance
              with its Privacy Policy
            </p>
          </li>
          <br />
        </ul>

        <h2>Information about General Data Protection Regulation (GDPR)</h2>
        <p class="text-muted">
          We may be collecting and using information from you if you are from
          the European Economic Area (EEA), and in this section of our Privacy
          Policy we are going to explain exactly how and why is this data
          collected, and how we maintain this data under protection from being
          replicated or used in the wrong way.
        </p>

        <h2>What is GDPR?</h2>
        <p class="text-muted">
          GDPR is an EU-wide privacy and data protection law that regulates how
          EU residents' data is protected by companies and enhances the
          control&nbsp;the EU residents have, over their personal data.
        </p>
        <p class="text-muted">
          The GDPR is relevant to any globally operating company and not just
          the EU-based businesses and EU residents. Our customers’ data is
          important irrespective of where they are located, which is why we have
          implemented GDPR controls as our baseline standard for all our
          operations worldwide.
        </p>

        <h2>What is personal data?</h2>
        <p class="text-muted">
          Any data that relates to an identifiable or identified individual.
          GDPR covers a broad spectrum of information that could be used on its
          own, or in combination with other pieces of information, to identify a
          person. Personal data extends beyond a person’s name or email address.
          Some examples include financial information, political opinions,
          genetic data, biometric data, IP addresses, physical address, sexual
          orientation, and ethnicity.
        </p>
        <p class="text-muted">
          The Data Protection Principles include requirements such as:
        </p>
        <ul class="text-muted">
          <li>
            Personal data collected must be processed in a fair, legal, and
            transparent way and should only be used in a way that a person would
            reasonably expect.
          </li>
          <li>
            Personal data should only be collected to fulfil a specific purpose
            and it should only be used for that purpose. Organizations must
            specify why they need the personal data when they collect it.
          </li>
          <li>
            Personal data should be held no longer than necessary to fulfil its
            purpose.
          </li>
          <li>
            People covered by the GDPR have the right to access their own
            personal data. They can also request a copy of their data, and that
            their data be updated, deleted, restricted, or moved to another
            organization.
          </li>
        </ul>

        <h2>Why is GDPR important?</h2>
        <p class="text-muted">
          GDPR adds some new requirements regarding how companies should protect
          individuals' personal data that they collect and process. It also
          raises the stakes for compliance by increasing enforcement and
          imposing greater fines for breach. Beyond these facts it's simply the
          right thing to do. At Muhammad Sayuti we strongly believe that your
          data privacy is very important and we already have solid security and
          privacy practices in place that go beyond the requirements of this new
          regulation.
        </p>

        <h2>
          Individual Data Subject's Rights - Data Access, Portability and
          Deletion
        </h2>
        <p class="text-muted">
          We are committed to helping our customers meet the&nbsp;data subject
          rights requirements of GDPR. Muhammad Sayuti processes or stores all
          personal data in fully vetted, DPA compliant vendors. We do store all
          conversation and personal data for up to 6 years unless your account
          is deleted. In which case, we dispose of all data in accordance with
          our Terms of Service and Privacy Policy, but we will not hold it
          longer than 60 days.
        </p>
        <p class="text-muted">
          We are aware that if you are working with EU customers, you need to be
          able to provide them with the ability to access, update, retrieve and
          remove personal data. We got you! We've been set up as self service
          from the start and have always given you access to your data and your
          customers data. Our customer&nbsp;support team is here for you to
          answer any questions you might have about working with the API.
        </p>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
