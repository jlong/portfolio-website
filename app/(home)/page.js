import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Box } from "@/components/Box";
import { Heading, Eyebrow } from "@/components/Typography";
import { Columns } from "@/components/Columns";
import { Actions } from "@/components/Actions";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { ScrollArea } from "@/components/ScrollArea";
import { Card } from "@/components/Card";
import { BigQuote } from "@/components/BigQuote";
import { Avatar } from "@/components/Avatar";
import {
  Person,
  PersonDetails,
  PersonName,
  PersonTitle,
} from "@/components/Person";
import portrait from "@/images/john-portrait.svg";
import uservoice from "@/images/logos/uservoice.svg";
import cloudbees from "@/images/logos/cloudbees.svg";
import teamworks from "@/images/logos/teamworks.svg";
import launchable from "@/images/logos/launchable.svg";
import elasticpath from "@/images/logos/elasticpath.svg";
import unstack from "@/images/logos/unstack.svg";
import thughes from "@/images/avatars/tim-hughes.jpg";
import dmorley from "@/images/avatars/dan-morley.jpg";
import kmalhi from "@/images/avatars/karan-malhi.jpg";
import dstover from "@/images/avatars/david-stover.jpg";
import rwhite from "@/images/avatars/richard-white.jpg";
import jdumay from "@/images/avatars/james-dumay.jpg";
import smoseley from "@/images/avatars/steven-moseley.jpg";

export default function Home() {
  return (
    <>
      <Section>
        <Container>
          <Columns layout={{ md: "3-1" }} gap="5">
            <Box>
              <Heading as="h1">
                <Eyebrow>John W. Long</Eyebrow>A multi-discipline product leader
                with 20+ years experience building web apps & leading software
                teams.
              </Heading>
              <p className="text-3xl/tight font-medium">
                Currently seeking a leadership role where I can collaborate on{" "}
                <strong>product</strong> and <strong>design</strong>.
              </p>
              <Actions>
                <Button kind="primary" size="large">
                  Get in touch
                </Button>
              </Actions>
            </Box>
            <Image alt="" src={portrait} width="428" height="520" />
          </Columns>
        </Container>
      </Section>
      <Section paddingY="8">
        <div className="flex gap-8 justify-around">
          <Image alt="ElasticPath" src={elasticpath} width={179} height={42} />
          <Image alt="Unstack" src={unstack} width={191} height={28} />
          <Image alt="Launchable" src={launchable} width={213} height={44} />
          <Image alt="Teamworks" src={teamworks} width={213} height={52} />
          <Image alt="CloudBees" src={cloudbees} width={201} height={32} />
          <Image alt="UserVoice" src={uservoice} width={206} height={28} />
        </div>
      </Section>
      <Divider />
      <Section>
        <Container>
          <Columns layout={{ md: "1-3" }} gap="5">
            <Heading as="h2">About me</Heading>
            <div className="prose">
              <p className="text-2xl">
                In past roles, I’ve been a <strong>Product Manger</strong>,{" "}
                <strong>Product Designer</strong>, and{" "}
                <strong>Frontend Engineer</strong>.
              </p>
              <p className="text-xl">
                My approach to product is grounded in action, prioritizing
                business objectives based on real customer insights. I believe
                in quickly testing ideas in production and iterating based on
                feedback and user behavior. For the modern software team{" "}
                <strong className="font-bold">
                  product-led growth must be the focus
                </strong>
                —solving real business problems in a way that creates passionate
                users.
              </p>
              <p className="text-xl">
                Collaboration, coaching, and managing by influence are the
                primary tools I use to lead teams. In the spirit of{" "}
                <Link href="https://agilemanifesto.org/principles.html">
                  old-school Agile
                </Link>
                , I believe in people over process. If a methodology is
                necessary, I’ve found the most success with{" "}
                <Link href="https://www.atlassian.com/agile/kanban">
                  Kanban
                </Link>{" "}
                or <Link href="https://basecamp.com/shapeup">Shape Up</Link>.
              </p>
            </div>
          </Columns>
        </Container>
        <ScrollArea direction="left" speed={5}>
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
                John was the best first hire we could hope for: engaged,
                passionate, super talented and a great recruiter of other talent
                to boot. He's a rare design-gineer that can be so incredibly
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
                John is one of the most thoughtful design leaders I've had the
                pleasure to work with. John and I worked closely together on a
                number of new products &amp; initiatives at CloudBees, including
                product reimaginings of Jenkins and CloudBees Core. I'd work
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
                larger. I was consistently impressed by John's ability to wear a
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
      <Section>
        <Container>
          <Columns layout={{ md: "1-3" }} gap="5">
            <Heading as="h2">Work history</Heading>
            <div className="prose">
              <p>
                I’ve worked with SaaS businesses on{" "}
                <strong>Storefront &amp; Website Builders</strong> (Elastic Path
                Studio), <strong>User Feedback Tools</strong> (UserVoice),{" "}
                <strong>Membership Management</strong> (MemberHub),{" "}
                <strong>Sports Team Management</strong> (Teamworks),{" "}
                <strong>Developer Tools</strong> (CloudBees Jenkins), and{" "}
                <strong>AI Tools</strong> (Launchable and Opine).
              </p>
            </div>
          </Columns>
        </Container>
      </Section>
      <Divider />
      <Section>
        <Container>
          <Columns layout={{ md: "1-3" }} gap="5">
            <Heading as="h2">Elsewhere</Heading>
            <div className="prose">
              <p></p>
            </div>
          </Columns>
        </Container>
      </Section>
    </>
  );
}
