<template>
  <div>
    <Navbar />
    <b-container style="margin-top: 150px; margin-bottom: 100px;">
      <b-row align-h="center">
        <b-col lg="9" xl="8">
          <section>
            <h3 class="title">Prelude</h3>
          <hr />
             <p class="text-justify font-size-16 line-height-1_6">
              Lovely, you're curious! We think the best way to wrap your head around the idea is by having a go at the demo.
             </p>
             <div class="text-center">
<b-link
                class="btn btn-primary mb-3"
                :to="{ name: 'Demo' }"
              >
              <span>Demo</span>
              <arrow-right-circle-icon class="icon-size-15 icon ml-1"></arrow-right-circle-icon>
            </b-link>
             </div>
            


             <p class="text-justify font-size-16 line-height-1_6">
               If you had a look at the demo, you're probably wondering what was
              all about? Well, it's meant to show you the power of leveraging
              <strong>LIVE</strong>
              hospital data for the
              <a href="https://en.wikipedia.org/wiki/Emergency_medical_dispatcher"
                >Emergency Medical Dispatcher (EMD)
              </a>
              i.e. the person that decides which hospital to take you to once you
              call 911 for a medical emergency.
            </p>
          </section>
        <section class="mt-5">
          <h3 class="title">Problem</h3>
          <hr />
          <p class="text-justify font-size-16 line-height-1_6">
            As you may very well know, COVID19 has overwhelmed hospitals with an
            endless flow of infected patients at a critical state. The EMD needs
            to make a swift decision to take the emergency caller to the right
            hospital. <br /><br />
            <i>Scenario:</i>
            Alice is infected with COVID19 and is having a hard time breathing,
            so she called for medical assistance. Which hospital should the EMD
            dispatch Alice to? The nearest? Let's say Alice does end up being
            transported by an ambulance to Hospital A (the nearest hospital).
            Alice will undergo a
            <a href="https://en.wikipedia.org/wiki/Triage">triage</a> by a
            paramedic at Hospital A, BUT, whatever the outcome, a ventilator is
            required to treat Alice, and they're all occupied. She'll either
            have to wait at the same hospital until one is vacant or get
            transferred to another hospital that POSSIBLY has a vacant
            ventilator.

            <br /><br />
            Alice's probability of having pneumonia just increased because she
            had to wait for resources to vacate. A few miles away, another
            hospital, Hospital B, had that resource vacant. This is an
            optimization problem.
          </p>
        </section>
        <section class="mt-5">
          <h3 class="title">Solution</h3>
          <hr />
          <p class="text-justify font-size-16 line-height-1_6">
            Imagine for a moment that the EMD had information about the vacant
            ventilator at Hospital B, Alice would have had a better chance of
            surviving. The Demo page, you just saw, fits in here, it's a visual
            of what the EMD would be able to see!
            <br /><br />
            <i>What information and at what rate?</i>
            <br />
            General information on resource inventory in hospitals (beds, ICUs,
            ventilators, respirators, PPEs, etc.) and medical personnel
            (doctors, nurses, etc.). Ideally, the rate should be as frequent as
            possible for the EMD to make a better judgment.
            <br /><br />
            <i>How will the EMD get that information?</i>
            <br />
            <ol>
              <li>
                Hospital Databases:
                <br />
                All hospitals have a database where they keep track of their
                resources. These databases can be accessed (the difficulty
                resides on the hospital's technical infrastructure). If hospitals give us their blessings,
                we can help build a few APIs from the
                hospital's side if they don't have an IT team to support the
                endeavor i.e. a backend plugin.
              </li>
              <br />
              <li>
                Staff Input:
                <br />
                If the database can't be accessed by a third party easily, then
                maybe a 6-hour update window from the hospital staff can be made
                on a web interface? For all of this to happen, the government
                might have to be impose hospitals to provide that data.
              </li>
            </ol>
            <br />
            The solution acts as a "middleman" platform, meaning there are two stakeholders,
            the government (Federal, State, etc.) and the hospitals. Both need
            to be on-board for this to happen, this doesn't mean a whole country
            needs to commit but maybe we can start at a small juristriction and
            grow from there. If you have any connection with an EMS dispatch
            centre or a hospital, please contact us, it'll help us get the ball rolling.
            <br/><br/>
            Whatever the approach, there needs to be a well coordinated team
            effort from both the government and the hospitals to cooperate and
            make this happen. There's a lot of work to be done, and all efforts are encocuraged,
            and yes I'm talking about YOU.
          </p>
        </section>
        <section class="mt-5">
          <h3 class="title">Further Questions</h3>
          <hr />
          <p class="text-justify font-size-16 line-height-1_6">
            <ul>
              <li>
                If there's a surge of sick patients wanting medical assistance
                and ambulances are not able to cope with the transportation,
                what should the EMD do? Should callers drive to a hospital?
              </li>
              <br />
              <li>
                If there are IT teams available, how long would this take? Are
                they occupied in more important tasks relevant to the pandemic?
              </li>

              <br />
              <li>
                Let's say the solution is implemented, what are the long term
                consequences (post-pandemic)? Does it increase government
                surveillance? Does it pave the way for third party access if it
                gets commercial (i.e. democratize anonymous health data)?
              </li>
            </ul>
          </p>
        </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/navbar';
import { ArrowRightCircleIcon } from 'vue-feather-icons';
export default {
  components: {
    Navbar,
    ArrowRightCircleIcon
  },
};
</script>

<style></style>
