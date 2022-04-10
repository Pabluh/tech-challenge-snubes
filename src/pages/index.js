import Head from "next/head";
import { Benefits } from "../containers/Benefits";
import { Hero } from "../containers/Hero";
import { Proposition } from "../containers/Proposition";
import { SocialProof } from "../containers/SocialProof";
import { Faq } from "../containers/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Snubes</title>
      </Head>
      <Hero />
      <Benefits />
      <Proposition />
      <SocialProof />
      <Faq />
    </>
  );
}
