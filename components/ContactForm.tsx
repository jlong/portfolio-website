import { Button } from '@/components/Button'
import { Actions } from '@/components/Actions'
import { LabeledControl } from '@/components/LabeledControl'
import { Textbox } from '@/components/Textbox'
import { Textarea } from '@/components/Textarea'
import { Heading } from './Typography'

export const ContactForm = () => {
  return (
    <div className="flex w-[375px] flex-col items-stretch gap-2">
      <Heading as="h3" className="mb-2">
        Get in touch
      </Heading>
      <LabeledControl label="Name">
        <Textbox autoFocus />
      </LabeledControl>
      <LabeledControl label="Email">
        <Textbox />
      </LabeledControl>
      <LabeledControl label="Message">
        <Textarea />
      </LabeledControl>
      <Actions className="mt-1" block>
        <Button kind="primary">Send Message</Button>
      </Actions>
    </div>
  )
}
