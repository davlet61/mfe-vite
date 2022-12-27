import { Container, Form, useZodForm, Input, Submit, Select } from 'ui';
import { z } from 'zod';

const newNoteSchema = z.object({
  text: z.string().min(1),
});

export const NewNote = () => {
  const form = useZodForm({ schema: newNoteSchema });

  return (
    <Container title="New Note">
      <Form form={form} onSubmit={({ text }) => window.alert('create')}>
        <Input label="Name" {...form.register('text')} />
        <Select label="genre" options={[{ value: 'Thriller' }, { value: 'Comedy' }]} />
        <Submit>Create Note</Submit>
      </Form>
    </Container>
  );
};
