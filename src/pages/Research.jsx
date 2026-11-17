import React from "react";
import { Page, Section, Entry, Todo } from "../components/ui";

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
          meta="UCLA · with Khang Nguyen & Prof. Guido Montúfar"
        >
          <p>
            We characterize the critical points of the training loss for linear self-attention, using linear algebra
            and matrix calculus to explain when these models converge, why some configurations are stable, and how
            architecture changes that picture.
          </p>
          <Todo>Status (ongoing or finished), dates, and a link to a paper, preprint, or poster if one exists.</Todo>
        </Entry>
      </Section>
    </Page>
  );
}
