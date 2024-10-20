import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Box } from '@/components/Box'
import { Heading, Eyebrow } from '@/components/Typography'
import { Columns } from '@/components/Columns'
import { Actions } from '@/components/Actions'
import { Button } from '@/components/Button'
import { Divider } from '@/components/Divider'
import { ScrollArea } from '@/components/ScrollArea'
import { Card } from '@/components/Card'
import { BigQuote } from '@/components/BigQuote'
import { Avatar } from '@/components/Avatar'
import {
  Person,
  PersonDetails,
  PersonName,
  PersonTitle
} from '@/components/Person'
import portrait from '@/images/john-portrait.svg'
import uservoice from '@/images/logos/uservoice.svg'
import cloudbees from '@/images/logos/cloudbees.svg'
import teamworks from '@/images/logos/teamworks.svg'
import launchable from '@/images/logos/launchable.svg'
import elasticpath from '@/images/logos/elasticpath.svg'
import unstack from '@/images/logos/unstack.svg'
import thughes from '@/images/avatars/tim-hughes.jpg'
import dmorley from '@/images/avatars/dan-morley.jpg'
import kmalhi from '@/images/avatars/karan-malhi.jpg'
import dstover from '@/images/avatars/david-stover.jpg'
import gdeken from '@/images/avatars/grant-deken.jpg'
import rwhite from '@/images/avatars/richard-white.jpg'
import jdumay from '@/images/avatars/james-dumay.jpg'
import smoseley from '@/images/avatars/steven-moseley.jpg'
import IconButton from '@/components/IconButton'

export default function Home() {
  return (
    <>
      <Section>
        <Container>
          <Columns layout={{ md: '3-1' }} gap="5">
            <Box>
              <Heading as="h1">
                <Eyebrow>John W. Long</Eyebrow> A multi-discipline product
                leader with 20+ years experience building web apps &amp; leading
                software teams.
              </Heading>
              <p className="text-3xl/tight text-default">
                Currently seeking a leadership role where I can collaborate on{' '}
                <strong className="text-bold">product</strong> and{' '}
                <strong className="text-bold">design</strong>.
              </p>
              <Actions>
                <Button kind="primary" size="large">
                  Get in touch
                </Button>
              </Actions>
            </Box>
            <Image
              alt=""
              className="self-center"
              src={portrait}
              width="428"
              height="520"
            />
          </Columns>
        </Container>
      </Section>
      <Section paddingY="8" paddingX={0}>
        <ScrollArea gap="10" direction="right">
          <Image alt="ElasticPath" src={elasticpath} width={179} height={42} />
          <Image alt="Unstack" src={unstack} width={191} height={28} />
          <Image alt="Launchable" src={launchable} width={213} height={44} />
          <Image alt="Teamworks" src={teamworks} width={213} height={52} />
          <Image alt="CloudBees" src={cloudbees} width={201} height={32} />
          <Image alt="UserVoice" src={uservoice} width={206} height={28} />
        </ScrollArea>
      </Section>
      <Divider />
      <Section id="about">
        <Container>
          <Columns layout={{ md: '1-3' }} gap="5">
            <Heading as="h2">About me</Heading>
            <div className="prose">
              <p className="text-2xl">
                In past roles, I’ve been a <strong>Product Manger</strong>,{' '}
                <strong>Product Designer</strong>, and{' '}
                <strong>Frontend Engineer</strong>.
              </p>
              <p className="text-xl/8">
                My approach to product is grounded in action, prioritizing
                business objectives based on real customer insights. I believe
                in quickly testing ideas in production and iterating based on
                feedback and user behavior. For the modern software team{' '}
                <strong className="font-bold">
                  product-led growth must be the focus
                </strong>
                —solving real business problems in a way that creates passionate
                users.
              </p>
              <p className="text-xl/8">
                Collaboration, coaching, and managing by influence are the
                primary tools I use to lead teams. In the spirit of{' '}
                <Link href="https://agilemanifesto.org/principles.html">
                  old-school Agile
                </Link>
                , I believe in people over process. If a methodology is
                necessary, I’ve found the most success with{' '}
                <Link href="https://www.atlassian.com/agile/kanban">
                  Kanban
                </Link>{' '}
                or <Link href="https://basecamp.com/shapeup">Shape Up</Link>.
              </p>
            </div>
          </Columns>
        </Container>
        <ScrollArea className="-mx-2">
          <Card>
            <BigQuote>
              <p>
                John possesses one of the sharpest product minds I’ve
                encountered. His passion for delivering high-quality solutions
                is matched only by his ability to maintain focus on both the
                smallest details and the broader strategic vision.
              </p>
            </BigQuote>
            <Person>
              <Avatar alt="" src={thughes} size={48} />
              <PersonDetails>
                <PersonName>Tim Hughes</PersonName>
                <PersonTitle>Customer Success, Unstack</PersonTitle>
              </PersonDetails>
            </Person>
          </Card>
          <Card>
            <BigQuote>
              <p>
                John is an exceptional product manager with a fantastic
                combination of customer-focused thinking and a deep
                understanding of good design. His ability to prioritize the
                customer experience while seamlessly executing on plans is
                nothing short of inspiring.
              </p>
            </BigQuote>
            <Person>
              <Avatar alt="" src={dmorley} size={48} />
              <PersonDetails>
                <PersonName>Dan Morley</PersonName>
                <PersonTitle>Product Manager, Elastic Path</PersonTitle>
              </PersonDetails>
            </Person>
          </Card>
          <Card>
            <BigQuote>
              <p>
                John was a tremendous help in revamping the UX around Value
                Streams. John took a fresh look at the whole experience and did
                a complete revamp of the UX, making the product much more
                intuitive and appealing in the process.
              </p>
            </BigQuote>
            <Person>
              <Avatar alt="" src={kmalhi} size={48} />
              <PersonDetails>
                <PersonName>Karan Malhi</PersonName>
                <PersonTitle>Product Manager, CloudBees</PersonTitle>
              </PersonDetails>
            </Person>
          </Card>
          <Card>
            <BigQuote>
              <p>
                John possesses the rare ability to lead a product from concept
                through to full implementation. His dedication to ensuring an
                optimal customer journey and seamless user experience is evident
                in every phase of the product lifecycle.
              </p>
            </BigQuote>
            <Person>
              <Avatar alt="" src={dstover} size={48} />
              <PersonDetails>
                <PersonName>David Stover</PersonName>
                <PersonTitle>
                  Director of Product Management, Elastic Path
                </PersonTitle>
              </PersonDetails>
            </Person>
          </Card>
          <Card>
            <BigQuote>
              <p>
                John is one of those rare people who bring expertise across
                design, product, and software development. He’s a great leader
                and ardent defender of the customer. As a result, every product
                John touches gets better.
              </p>
            </BigQuote>
            <Person>
              <Avatar alt="" src={gdeken} size={48} />
              <PersonDetails>
                <PersonName>Grant Deken</PersonName>
                <PersonTitle>CEO, Unstack</PersonTitle>
              </PersonDetails>
            </Person>
          </Card>
          <Card>
            <BigQuote>
              <p>
                John was the best first hire we could hope for: engaged,
                passionate, super talented and a great recruiter of other talent
                to boot. He’s a rare design-gineer that can be so incredibly
                powerful, especially on the right cross functional teams. Highly
                recommend.
              </p>
            </BigQuote>
            <Person>
              <Avatar alt="" src={rwhite} size={48} />
              <PersonDetails>
                <PersonName>Richard White</PersonName>
                <PersonTitle>CEO, UserVoice</PersonTitle>
              </PersonDetails>
            </Person>
          </Card>
          <Card>
            <BigQuote>
              <p>
                John is one of the most thoughtful design leaders I’ve had the
                pleasure to work with. John and I worked closely together on a
                number of new products &amp; initiatives at CloudBees, including
                product reimaginings of Jenkins and CloudBees Core. I’d work
                with him again in a heartbeat!
              </p>
            </BigQuote>
            <Person>
              <Avatar alt="" src={jdumay} size={48} />
              <PersonDetails>
                <PersonName>James Dumay</PersonName>
                <PersonTitle>Product Manager, CloudBees</PersonTitle>
              </PersonDetails>
            </Person>
          </Card>
          <Card>
            <BigQuote>
              <p>
                John’s ability to generate market insights, his design
                intuition, and his vision for the future helped us mold a
                best-in-class product competing with teams orders of magnitude
                larger. I was consistently impressed by John’s ability to wear a
                multiple of hats simultaneously.
              </p>
            </BigQuote>
            <Person>
              <Avatar alt="" src={smoseley} size={48} />
              <PersonDetails>
                <PersonName>Steven Moseley</PersonName>
                <PersonTitle>CTO, Unstack</PersonTitle>
              </PersonDetails>
            </Person>
          </Card>
        </ScrollArea>
      </Section>
      <Divider />
      <Section id="work">
        <Container>
          <Columns layout={{ md: '1-3' }} gap="5">
            <Heading as="h2">Work history</Heading>
            <div className="prose">
              <p className="text-xl/8">
                I’ve worked with SaaS businesses on{' '}
                <strong>Storefront &amp; Website Builders</strong> (Elastic Path
                Studio), <strong>User Feedback Tools</strong> (UserVoice),{' '}
                <strong>Membership Management</strong> (MemberHub),{' '}
                <strong>Sports Team Management</strong> (Teamworks),{' '}
                <strong>Developer Tools</strong> (CloudBees Jenkins), and{' '}
                <strong>AI Tools</strong> (Launchable and Opine).
              </p>
            </div>
          </Columns>
        </Container>
        <Container>
          <Columns layout={{ md: '1-3' }} gap="5">
            <Heading as="h3" styledAs="h4">
              Mar 2023 &ndash; Oct 2024
            </Heading>
            <div className="prose">
              <Heading as="h4" styledAs="h3">
                Director, Product at Elastic Path
              </Heading>
              <p>
                While at Elastic Path I oversaw the integration of{' '}
                <Link href="https://elasticpath.com/studio">
                  Elastic Path Studio
                </Link>{' '}
                (formerly Unstack) with the core Elastic Path services. This
                created an easy to use Storefront builder for Elastic Path. This
                was the main point of the acquisition.
              </p>
              <p>
                While Studio consumed much of my focus, I also joined and led
                the <strong>Product-Lead growth team</strong> collaborating with
                Marketing to launch multiple landing pages and a revamped
                developer site. During this time we saw a{' '}
                <strong>6x improvement</strong> converting website visitors to
                signups.
              </p>
              <p>
                I also collaborated with the design team on a design system to
                unify the design language across products.
              </p>
            </div>

            <Heading as="h3" styledAs="h4">
              Apr 2021 &ndash; Mar 2023
            </Heading>
            <div className="prose">
              <Heading as="h4" styledAs="h3">
                Director of Product &amp; Design at Unstack
              </Heading>
              <p>
                After using{' '}
                <Link href="https://medium.com/@johnwlong/why-we-chose-unstack-over-wordpress-and-havent-looked-back-f0dae6384cd">
                  Unstack at Launchable
                </Link>{' '}
                for the website, I feel in love with the product and had to
                submit my application. To my great delight I was hired direct
                product and design.
              </p>
              <p>
                At Unstack, I oversaw the creation of a{' '}
                <Link href="https://apps.shopify.com/unstack">
                  Shopify Landing Pages app
                </Link>
                , revamped the page builder and style guide, and contributed
                numerous ideas for improving the component system and CMS
                capabilities. We worked particularly hard to make our no-touch
                onboarding experience top notch, and had over 600 installs
                before Unstack was acquired by Elastic Path.
              </p>
            </div>

            <Heading as="h3" styledAs="h4">
              Feb 2020 &ndash; Apr 2021
            </Heading>
            <div className="prose">
              <Heading as="h4" styledAs="h3">
                Principle Product Designer &amp; Co-founder at Launchable
              </Heading>
              <p>
                Joined up with two of{' '}
                <Link href="https://kohsuke.org/">Kohsuke Kawaguchi</Link> and
                <Link href="https://entrepreneurshipunlocked.substack.com/">
                  Harpreet Singh
                </Link>{' '}
                to create{' '}
                <Link href="https://launchableinc.com">Launchable</Link>.
                Launchable is AI tool that greatly reduces the time required for
                automated tests to run. On paper my role was Principle Product
                Designer, but since it was a small team I also created much of
                the marketing and sales collateral and collaborated with product
                on the vision. I oversaw the initial design of the application
                and worked closely with the Engineering team on the right way to
                visualize improvements to the AI model. Launchable was acquired
                in 2024 by CloudBees!
              </p>
            </div>

            <Heading as="h3" styledAs="h4">
              Nov 2018 &ndash; Feb 2020
            </Heading>
            <div className="prose">
              <Heading as="h4" styledAs="h3">
                Director Product Design at Teamworks
              </Heading>
              <p>
                Joined as the lead designer and coordinated work for several
                teams (20+ developers). During my tenor we launched{' '}
                <Link href="https://www.figma.com/exit?url=https://teamworks.com/academics/">
                  Teamworks Academics
                </Link>
                , revamped the design system, and launched numerous improvements
                to the core product (now called{' '}
                <Link href="https://teamworks.com/academics/">
                  Teamworks Operations
                </Link>
                ).
              </p>
            </div>

            <Heading as="h3" styledAs="h4">
              Oct 2016 &ndash; Oct 2018
            </Heading>
            <div className="prose">
              <Heading as="h4" styledAs="h3">
                Design Manager at CloudBees
              </Heading>
              <p>
                Joined as a Product Designer during a period of growth and
                quickly became the Design Manager. I worked on{' '}
                <Link href="https://www.cloudbees.com/jenkins">
                  CloudBees Jenkins
                </Link>
                and{' '}
                <Link href="https://www.cloudbees.com/newsroom/cloudbees-launches-cloudbees-devoptics-delivering-unparalleled-devops-team-insights-and">
                  DevOptics
                </Link>
                . While I was there we also acquired{' '}
                <Link href="https://www.cloudbees.com/products/codeship">
                  CodeShip
                </Link>{' '}
                and created a coherent vision for a multi-product UX. I grew the
                design team from 3 to 8.
              </p>
            </div>

            <Heading as="h3" styledAs="h4">
              Aug 2011 &ndash; Sep 2016
            </Heading>
            <div className="prose">
              <Heading as="h4" styledAs="h3">
                UX Designer at UserVoice
              </Heading>
              <p>
                At UserVoice I was a coding designer implementing most of the
                CSS and JavaScript for my designs. While I was there I lead the
                design of the new feedback widget, launched a new version of the
                ticketing UI, and revamped the admin feedback UI. I was also one
                of the first hires in Raleigh, and played a key role in
                recruiting and organizing the Raleigh office.
              </p>
            </div>
          </Columns>
        </Container>
      </Section>
      <Divider />
      <Section id="elsewhere">
        <Container>
          <Columns layout={{ md: '1-3' }} gap="5">
            <Heading as="h2">Elsewhere</Heading>
            <div>
              <Heading as="h3">Personal projects</Heading>
              <div className="mb-6 mt-3 flex gap-4">
                <div className="flex h-[198px] w-[316px] items-center justify-center rounded-2xl border border-border bg-depth-1">
                  Radiant CMS
                </div>
                <div className="flex h-[198px] w-[316px] items-center justify-center rounded-2xl border border-border bg-depth-1">
                  Zest Icons
                </div>
                <div className="flex h-[198px] w-[316px] items-center justify-center rounded-2xl border border-border bg-depth-1">
                  Taskpage
                </div>
              </div>

              <Heading as="h3">Social networks</Heading>
              <div className="mt-3 flex gap-2">
                <IconButton
                  href="https://linkedin.com/in/wiseheart"
                  uid="linkedin"
                  tip="LinkedIn"
                />
                <IconButton
                  href="https://dribbble.com/johnwlong"
                  uid="dribbble"
                  tip="Dribbble"
                />
                <IconButton
                  href="https://github.com/jlong"
                  uid="github"
                  tip="GitHub"
                />
                <IconButton
                  href="https://codepen.io/jlong"
                  uid="codepen"
                  tip="CodePen"
                />
                <IconButton
                  href="https://twitter.com/johnwlong"
                  uid="twitter"
                  tip="Twitter"
                />
              </div>
            </div>
          </Columns>
        </Container>
      </Section>
      <Divider />
    </>
  )
}
