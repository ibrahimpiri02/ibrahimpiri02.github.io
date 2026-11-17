import React from "react";
import { Page, Section, Entry } from "../components/ui";

export default function Research() {
  return (
    <Page
      eyebrow="Research"
      title="Why does attention train the way it does?"
      intro="I'm interested in the mathematics of learning: when optimization converges, which solutions are stable, and what that says about model design."
    >
      <Section title="Projects">
        <Entry
          title="Critical points of linear self-attention"
          meta="UCLA Mathematics · 2025–26"
        >
          <p>
            With Khang Nguyen and Prof. Guido Montúfar, I worked on characterizing the critical points of the training loss for linear self-attention. We used linear algebra
            and matrix calculus to explain when these models converge, why some configurations are stable, and how
            architecture changes that picture.
          </p>
        </Entry>
      </Section>
    </Page>
  );
}
