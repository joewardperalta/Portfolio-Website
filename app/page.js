import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Column from "@/components/Wrappers/Column";
import Container from "@/components/Wrappers/Container";
import Headline from "@/components/Wrappers/Headline";
import Action from "@/components/Wrappers/Action";
import Title from "@/components/Typography/Title";
import Subheading from "@/components/Typography/Subheading";
import Image from "next/image";
import MainNav from "@/components/Navigation/MainNav";

export default function Home() {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <section className="bg-hero bg-cover bg-center " id="hero">
          <div className="bg-black/50">
            <Container className="items-center h-screen">
              <Column>
                <Headline className="flex flex-col items-center">
                  <Title className="text-center text-white">
                    Enhance your business visibility through my web development
                    services.
                  </Title>
                  <Subheading className="text-center text-white hidden tablet:block tablet:max-w-[54.5rem]">
                    I specialize in creating stunning websites tailored to your
                    needs. Let me help you establish a strong digital footprint
                    that attracts and retains customers.
                  </Subheading>
                </Headline>

                <Action className="flex gap-7 flex-col justify-center tablet:flex-row">
                  <PrimaryButton>Get Started</PrimaryButton>
                  <SecondaryButton className="text-white">
                    Learn More
                  </SecondaryButton>
                </Action>
              </Column>
            </Container>
          </div>
        </section>
      </main>
    </>
  );
}
