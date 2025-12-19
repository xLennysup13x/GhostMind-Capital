import { Html, Body, Container, Text, Heading, Link } from '@react-email/components';

export default function WaitlistEmail() {
  return (
    <Html>
      <Body style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
        <Container style={{ padding: '40px' }}>
          <Heading style={{ color: '#00ff8c' }}>Welcome to Ghostmind 👻</Heading>
          <Text>We’ll ping you 10 min before the next AI-curated drop.</Text>
          <Link href="https://ghostmind.dev" style={{ color: '#00ff8c' }}>Visit Site</Link>
        </Container>
      </Body>
    </Html>
  );
}