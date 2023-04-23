import { GetServerSideProps } from 'next'

type TestProps = {
  HelloWorldSSR: string
}

export const getServerSideProps: GetServerSideProps<TestProps> = async (context) => {
  return {
    props: {
      HelloWorldSSR: "Hello Frida"
    }
  };
}

export default function About({ HelloWorldSSR }: TestProps) {
  return (
    <div>
      <h2>{HelloWorldSSR}</h2>
    </div>
  );
}
