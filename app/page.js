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
import {
  Feature,
  Pricing,
  PricingAction,
  PricingBody,
  PricingDescription,
  PricingFeatures,
  PricingHead,
  PricingPrice,
  PricingTitle,
} from "@/components/Cards/Pricing";
import Form from "next/form";
import TextArea from "@/components/Form/TextArea";

// data
import pricingData from "@/data/pricing.json";
import servicesData from "@/data/services.json";
import { FormInput } from "@/components/Form/FormInput";
import { List, ListContainer, ListTitle } from "@/components/List";
import Link from "next/link";
import Wrapper from "@/components/Wrappers/Wrapper";

export default function Home() {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <section className="bg-hero bg-cover bg-center " id="hero">
          <div className="bg-black/50">
            <Wrapper>
              <Container className="items-center h-screen">
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
                    <PrimaryButton>Get Started</PrimaryButton>
                    <SecondaryButton className="text-white">
                      Learn More
                    </SecondaryButton>
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
                <Headline>
                  <SectionHeading>
                    Hello, I&apos;m Joeward Peralta
                  </SectionHeading>
                  <Subheading>
                    Passionate web developer with 1 year of experience, skilled
                    in creating clean and responsive websites using modern
                    technologies like React.js and Next.js. My focus is on
                    delivering high-quality projects that not only meet the
                    needs of my clients but also provide an exceptional user
                    experience.
                  </Subheading>
                </Headline>
              </Column>
              <Column>
                <Image
                  className="rounded-default"
                  src="/img/Joeward Peralta Walking on Railway 1.jpg"
                  alt="Joeward Peralta Walking on Railway with a big smile."
                  width={2000}
                  height={2000}
                />
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
              <Column className="flex flex-col gap-12">
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
              <Column className="flex flex-col gap-12">
                <Product>
                  <ProductHead>
                    <Image
                      src="/img/Laptop Mockup For TASC.jpeg"
                      alt="A laptop mockup screen showcasing the 
                    apostolic sanctuary of canada website."
                      width={2000}
                      height={2000}
                    />
                  </ProductHead>
                  <ProductBody>
                    <ProductTitle>Apostolic Sanctuary of Canada</ProductTitle>
                    <ProductDescription>
                      A professional and informative website for a local church
                      that teaches about oneness meaning one God.
                    </ProductDescription>
                    <ProductTag>
                      <Tag>UI/UX Design</Tag>
                      <Tag>Responsive Layout</Tag>
                      <Tag>Front-End Development</Tag>
                    </ProductTag>
                  </ProductBody>
                  <ProductAction>
                    <TertiaryButton>View Project</TertiaryButton>
                  </ProductAction>
                </Product>
                <Product>
                  <ProductHead>
                    <Image
                      src="/img/Laptop Mockup For Insideout Window Coverings.jpeg"
                      alt="A laptop mockup screen showcasing 
                    the Insideout Window Coverings website."
                      width={2000}
                      height={2000}
                    />
                  </ProductHead>
                  <ProductBody>
                    <ProductTitle>Inside Out Window Coverings</ProductTitle>
                    <ProductDescription>
                      An online store that sell window blinds, shades, awning,
                      drapery, skylight, and motorization.
                    </ProductDescription>
                    <ProductTag>
                      <Tag>E-commerce</Tag>
                      <Tag>Full-Stack Development</Tag>
                      <Tag>Shopify</Tag>
                    </ProductTag>
                  </ProductBody>
                  <ProductAction>
                    <TertiaryButton>View Project</TertiaryButton>
                  </ProductAction>
                </Product>
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

        <section>
          <Wrapper>
            <Container>
              <Column>
                <Headline>
                  <SectionHeading className="text-center">
                    Pricing Plans
                  </SectionHeading>
                  <Subheading className="text-center">
                    Choose the perfect plan for your needs today!
                  </Subheading>
                </Headline>
              </Column>
              <Column className="flex flex-col gap-6">
                {pricingData.map((plan, index) => {
                  return (
                    <Pricing
                      key={plan.id}
                      className={index == 1 ? "bg-black text-white" : ""}
                    >
                      <PricingHead>
                        <PricingTitle>{plan.title}</PricingTitle>
                        <PricingDescription>
                          {plan.description}
                        </PricingDescription>
                        <PricingPrice>${plan.price}/mo</PricingPrice>
                      </PricingHead>
                      <PricingBody>
                        <PricingFeatures>
                          {plan.features.map((feature, index) => (
                            <Feature key={index}>{feature}</Feature>
                          ))}
                        </PricingFeatures>
                      </PricingBody>
                      <PricingAction>
                        <PrimaryButton>Get Started</PrimaryButton>
                      </PricingAction>
                    </Pricing>
                  );
                })}
              </Column>
            </Container>
          </Wrapper>
        </section>

        <section id="contact">
          <Wrapper>
            <Container>
              <Column>
                <Headline>
                  <SectionHeading>Have something in mind?</SectionHeading>
                  <Subheading>
                    If you have questions or concerns please feel free to
                    contact me, and I will get back at you as soon as possible.
                  </Subheading>
                </Headline>
              </Column>
              <Column>
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
              <Column className="rounded-md overflow-hidden mt-6">
                <Image
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
            <Container>
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
              <Column className="flex pb-8 border-b border-white">
                <List className="w-full">
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
                <List className="w-full">
                  <ListTitle>Help</ListTitle>
                  <ListContainer>
                    <List>
                      <Link href="#about">Cancel order</Link>
                    </List>
                    <List>
                      <Link href="tel:6479013040">Call me</Link>
                    </List>
                  </ListContainer>
                </List>
              </Column>
            </Container>
            <Container>
              <Column className="pt-8 text-center">
                <p>&copy; 2024 JLANCE. All rights reserved.</p>
              </Column>
              <Column className="flex gap-5 w-full justify-center">
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
