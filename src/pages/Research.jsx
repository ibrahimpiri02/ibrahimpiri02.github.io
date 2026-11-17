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
          meta="UCLA Mathematics · Nov 2025–June 2026"
        >
          <p>
            With PhD student Khang Nguyen, Prof. Guido Montúfar, and two other high school collaborators, I
            worked on characterizing the critical points of the training loss for linear self-attention. We used linear algebra
            and matrix calculus to explain when these models converge, why some configurations are stable, and how
            architecture changes that picture.
          </p>
          <p>
            I ran Python experiments comparing our theoretical predictions against how trained models actually
            behave, and presented the work in a talk at UCLA to an audience of about 50.
          </p>
        </Entry>
      </Section>
    </Page>
  );
}
