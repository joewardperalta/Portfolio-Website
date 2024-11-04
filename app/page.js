"use client";
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
import SectionHeading from "@/components/Typography/SectionHeading";
import {
  Service,
  ServiceBody,
  ServiceDescription,
  ServiceHead,
  ServiceTitle,
} from "@/components/Cards/Service";
import {
  Product,
  ProductAction,
  ProductBody,
  ProductDescription,
  ProductHead,
  ProductTag,
  ProductTitle,
  Tag,
} from "@/components/Cards/Product";
import TertiaryButton from "@/components/Buttons/TertiaryButton";
import {
  AuthorAvatar,
  AuthorName,
  AuthorRole,
  Testimonial,
  TestimonialAuthor,
  TestimonialMessage,
} from "@/components/Cards/Testimonial";
import Pricing from "@/components/Cards/Pricing";
import Form from "next/form";
import TextArea from "@/components/Form/TextArea";
import { FormInput } from "@/components/Form/FormInput";
import { List, ListContainer, ListTitle } from "@/components/List";
import Link from "next/link";
import Wrapper from "@/components/Wrappers/Wrapper";

// data
import pricingData from "@/data/pricing.json";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";

export default function Home() {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <section className="bg-hero bg-cover bg-center h-screen " id="#hero">
          <div className="bg-black/50 h-full">
            <Wrapper className="h-full">
              <Container className="items-center h-full">
                <Column>
                  <Headline className="flex flex-col items-center">
                    <Title className="text-center text-white">
                      Enhance your business visibility through my web
                      development services.
                    </Title>
                    <Subheading className="text-center text-white hidden tablet:block tablet:max-w-[54.5rem]">
                      I specialize in creating stunning websites tailored to
                      your needs. Let me help you establish a strong digital
                      footprint that attracts and retains customers.
                    </Subheading>
                  </Headline>
                  <Action className="flex gap-7 flex-col justify-center tablet:flex-row">
                    <Link href="#pricing">
                      <PrimaryButton>Get Started</PrimaryButton>
                    </Link>
                    <Link href="#about">
                      <SecondaryButton className="text-white">
                        Learn More
                      </SecondaryButton>
                    </Link>
                  </Action>
                </Column>
              </Container>
            </Wrapper>
          </div>
        </section>

        <section id="about">
          <Wrapper>
            <Container>
              <Column>
                <Headline className="laptop:flex gap-36">
                  <SectionHeading className="w-full">
                    Hello, I&apos;m Joeward Peralta
                  </SectionHeading>
                  <Subheading className="w-full">
                    Passionate web developer with 1 year of experience, skilled
                    in creating clean and responsive websites using modern
                    technologies like React.js and Next.js. My focus is on
                    delivering high-quality projects that not only meet the
                    needs of my clients but also provide an exceptional user
                    experience.
                  </Subheading>
                </Headline>
              </Column>
            </Container>
            <Container>
              <Column className="flex gap-3">
                <div className="w-full h-[470px] hidden tablet:block">
                  <Image
                    className="rounded-md inline-block object-cover object-center w-full h-full"
                    src="/img/Joeward Peralta Walking on Railway 1.jpg"
                    alt="Joeward Peralta Walking on Railway with a big smile."
                    width={2000}
                    height={2000}
                  />
                </div>
                <div className="w-full h-[470px] tablet:hidden laptop:block">
                  <Image
                    className="rounded-md inline-block object-cover object-center w-full h-full"
                    src="/img/Joeward Peralta Professional.jpg"
                    alt="Joeward Peralta Walking on Railway with a big smile."
                    width={2000}
                    height={2000}
                  />
                </div>
                <div className="w-full h-[470px] hidden tablet:block">
                  <Image
                    className="rounded-md inline-block object-cover object-center w-full h-full"
                    src="/img/Joeward Peralta Standing Between Railway.jpg"
                    alt="Joeward Peralta Walking on Railway with a big smile."
                    width={2000}
                    height={2000}
                  />
                </div>
              </Column>
            </Container>
          </Wrapper>
        </section>

        <section id="services">
          <Wrapper>
            <Container>
              <Column>
                <Headline>
                  <SectionHeading className="text-center">
                    Transform Your Online Presence with My Comprehensive Website
                    Solutions
                  </SectionHeading>
                </Headline>
              </Column>
            </Container>
            <Container>
              <Column className="flex flex-col gap-12 justify-center laptop:flex-row">
                {servicesData.map((service) => (
                  <Service key={service.id}>
                    <ServiceHead>
                      <Image
                        src={service.avatar.src}
                        alt={service.avatar.alt}
                        width={48}
                        height={48}
                      />
                    </ServiceHead>
                    <ServiceBody>
                      <ServiceTitle>{service.title}</ServiceTitle>
                      <ServiceDescription>
                        {service.description}
                      </ServiceDescription>
                    </ServiceBody>
                  </Service>
                ))}
              </Column>
            </Container>
          </Wrapper>
        </section>

        <section id="projects">
          <Wrapper>
            <Container>
              <Column>
                <Headline>
                  <SectionHeading className="text-center">
                    Showcase of My Work
                  </SectionHeading>
                </Headline>
              </Column>
            </Container>
            <Container>
              <Column className="flex flex-col gap-12 laptop:flex-row">
                {projectsData.map((project) => (
                  <Product key={project.id}>
                    <ProductHead>
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={2000}
                        height={2000}
                      />
                    </ProductHead>
                    <ProductBody>
                      <ProductTitle>{project.title}</ProductTitle>
                      <ProductDescription>
                        {project.description}
                      </ProductDescription>
                      <ProductTag>
                        {project.tags.map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </ProductTag>
                    </ProductBody>
                    <ProductAction>
                      <TertiaryButton>
                        <Link href={project.website}>View Project</Link>
                      </TertiaryButton>
                    </ProductAction>
                  </Product>
                ))}
              </Column>
            </Container>
          </Wrapper>
        </section>

        <section id="testimonials">
          <Wrapper>
            <Container>
              <Column>
                <Headline>
                  <SectionHeading className="text-center">
                    Hear From My Clients
                  </SectionHeading>
                </Headline>
              </Column>
            </Container>
            <Container>
              <Column>
                <Testimonial>
                  <TestimonialMessage>
                    “My Church needed a website and we requested Mr. Joeward
                    Peralta to build, design and maintain our website. It was
                    easy and straightforward as to what we needed and desired
                    our constituents and those interested in attending our
                    church locally, internationally and online. We recommend Mr.
                    Peralta and look forward to working with him for all our
                    website design needs.”
                  </TestimonialMessage>
                  <TestimonialAuthor>
                    <AuthorAvatar>
                      <Image
                        src="/img/Pastor David Fernan.jpg"
                        width={2000}
                        height={2000}
                        alt="John David Fernan along with his wife 
                      standing on top of a mountain."
                      />
                    </AuthorAvatar>
                    <AuthorName>John David Fernan</AuthorName>
                    <AuthorRole>
                      Senior Pastor, Apostolic Sanctuary of Canada
                    </AuthorRole>
                  </TestimonialAuthor>
                </Testimonial>
              </Column>
            </Container>
          </Wrapper>
        </section>

        <section id="pricing">
          <Wrapper>
            <Container>
              <Column>
                <Headline className="laptop:flex laptop:flex-col laptop:items-center">
                  <SectionHeading className="text-center">
                    Pricing Plans
                  </SectionHeading>
                  <Subheading className="text-center">
                    Choose the perfect plan for your needs today!
                  </Subheading>
                </Headline>
              </Column>
            </Container>
            <Container>
              <Column className="flex flex-col items-center gap-6 laptop:flex-row">
                {pricingData.map((plan, index) => {
                  return (
                    <Pricing
                      key={plan.id}
                      theme={index === 1 && "dark"}
                      title={plan.title}
                      description={plan.description}
                      price={plan.price}
                      features={plan.features}
                    />
                  );
                })}
              </Column>
            </Container>
          </Wrapper>
        </section>

        <section id="contact">
          <Wrapper>
            <Container className="laptop:gap-12">
              <Column>
                <Headline>
                  <SectionHeading>Have something in mind?</SectionHeading>
                  <Subheading>
                    If you have questions or concerns please feel free to
                    contact me, and I will get back at you as soon as possible.
                  </Subheading>
                </Headline>
                <Form action="" className="space-y-9">
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                  />
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                  />
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                  />
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                  />
                  <TertiaryButton className="ml-auto" type="submit">
                    Send
                  </TertiaryButton>
                </Form>
              </Column>

              <Column className="rounded-md overflow-hidden mt-6 laptop:mt-0">
                <Image
                  className="h-full object-cover"
                  src="/img/hand-woman-holding-mobile-smartphone-with-contact-us.jpg"
                  width={2000}
                  height={2000}
                  alt="A woman holding using his phone to contact someone."
                />
              </Column>
            </Container>
          </Wrapper>
        </section>

        <section className="bg-black text-white">
          <Wrapper>
            <Container className="pb-8 border-b border-white">
              <Column className="mb-14">
                <Headline>
                  <SectionHeading>
                    Need a professional developer?
                  </SectionHeading>
                  <Subheading>
                    I’m here to help you grow your business and make a change in
                    your community by making your brand standout among the
                    others.
                  </Subheading>
                </Headline>
                <Action>
                  <PrimaryButton>Get Started</PrimaryButton>
                </Action>
              </Column>
              <Column className="laptop:flex laptop:justify-end laptop:gap-32">
                <List>
                  <ListTitle>Links</ListTitle>
                  <ListContainer>
                    <List>
                      <Link href="#about">About</Link>
                    </List>
                    <List>
                      <Link href="#services">Services</Link>
                    </List>
                    <List>
                      <Link href="#portfolio">Portfolio</Link>
                    </List>
                    <List>
                      <Link href="#testimonials">Testimonials</Link>
                    </List>
                    <List>
                      <Link href="#contact">Contact</Link>
                    </List>
                  </ListContainer>
                </List>
                <List>
                  <ListTitle>Help</ListTitle>
                  <ListContainer>
                    <List>
                      <Link href="tel:6479013040">Call me</Link>
                    </List>
                  </ListContainer>
                </List>
              </Column>
            </Container>

            <Container className="pt-8 ">
              <Column className="text-center tablet:basis-1/3 tablet:text-start">
                <p>&copy; 2024 JLANCE. All rights reserved.</p>
              </Column>
              <Column className="flex gap-5 justify-center tablet:basis-1/3 tablet:justify-end">
                <Link
                  href="https://www.facebook.com/joewardperalta.joe/"
                  target="_blank"
                >
                  <Image
                    src="/img/facebook.svg"
                    width={22}
                    height={22}
                    alt="facebook icon"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/joewardperalta/"
                  target="_blank"
                >
                  <Image
                    src="/img/linkedin.svg"
                    width={22}
                    height={22}
                    alt="facebook icon"
                  />
                </Link>
                <Link href="https://github.com/joewardperalta" target="_blank">
                  <Image
                    src="/img/github.svg"
                    width={22}
                    height={22}
                    alt="facebook icon"
                  />
                </Link>
              </Column>
            </Container>
          </Wrapper>
        </section>
      </main>
    </>
  );
}
