import Link from 'next/link'
import { Section } from "@/components/Section"
import { Container } from "@/components/Container"
import { Box } from "@/components/Box"
import { Heading, Eyebrow } from "@/components/Typography"
import { Columns } from "@/components/Columns"
import { Actions } from "@/components/Actions"
import { Button } from "@/components/Button"
import { Divider } from "@/components/Divider"

export default function Home() {
  return (
    <>
      <Section>
        <Container>
          <Columns layout={{md: "3-1"}} gap="5">
            <Box>
              <Heading as="h1">
                <Eyebrow>John W. Long</Eyebrow>
                A multi-discipline product leader with 20+ years experience building web apps & leading software teams.
              </Heading>
              <p className="text-3xl/tight font-medium">Currently seeking a leadership role where I can collaborate on <strong>product</strong> and <strong>design</strong>.</p>
              <Actions>
                <Button kind="primary" size="large">Get in touch</Button>
              </Actions>
            </Box>
          </Columns>
        </Container>
      </Section>
      <Divider />
      <Section>
        <Container>
          <Columns layout={{md: "1-3"}} gap="5">
            <Heading as="h2">About me</Heading>
            <div className="prose">
              <p className="text-2xl">In past roles, I’ve been a <strong>Product Manger</strong>, <strong>Product Designer</strong>, and <strong>Frontend Engineer</strong>.</p>
              <p className="text-xl">My approach to product is grounded in action, prioritizing business objectives based on real customer insights. I believe in quickly testing ideas in production and iterating based on feedback and user behavior. For the modern software team <strong className="font-bold">product-led growth must be the focus</strong>—solving real business problems in a way that creates passionate users.</p>
              <p className="text-xl">Collaboration, coaching, and managing by influence are the primary tools I use to lead teams. In the spirit of <Link href="https://agilemanifesto.org/principles.html">old-school Agile</Link>, I believe in people over process. If a methodology is necessary, I’ve found the most success with <Link href="https://www.atlassian.com/agile/kanban">Kanban</Link> or <Link href="https://basecamp.com/shapeup">Shape Up</Link>.</p>
            </div>
          </Columns>
        </Container>
      </Section>
      <Divider />
      <Section>
        <Container>
          <Columns layout={{md: "1-3"}} gap="5">
            <Heading as="h2">Work history</Heading>
            <div className="prose">
              <p>I’ve worked with SaaS businesses on <strong>Storefront &amp; Website Builders</strong> (Elastic Path Studio), <strong>User Feedback Tools</strong> (UserVoice), <strong>Membership Management</strong> (MemberHub), <strong>Sports Team Management</strong> (Teamworks), <strong>Developer Tools</strong> (CloudBees Jenkins), and <strong>AI Tools</strong> (Launchable and Opine).</p>
            </div>
          </Columns>
        </Container>
      </Section>
      <Divider />
      <Section>
        <Container>
          <Columns layout={{md: "1-3"}} gap="5">
            <Heading as="h2">Elsewhere</Heading>
            <div className="prose">
              <p></p>
            </div>
          </Columns>
        </Container>
      </Section>
    </>
  )
}
