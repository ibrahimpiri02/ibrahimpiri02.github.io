import React from "react";
import { Link } from "react-router-dom";
import { PageHero, Body, Section, Bullets, Callout } from "../components/ui";
import { AttentionMatrix } from "../components/Illustrations";

export default function Research() {
  return (
    <>
      <PageHero
        seed={5}
        eyebrow="Research · Machine learning theory"
        title="Why does attention learn what it learns?"
        intro="Transformers work remarkably well, and we still can’t fully explain why. I’m drawn to the mathematics underneath: when training converges, which solutions are stable, and what that tells us about how to design models."
      />

      <Body>
        <Section index="01" title="Critical points of linear self-attention">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="space-y-5">
              <p className="font-mono text-xs text-accent">UCLA Department of Mathematics · Nov 2025 – June 2026</p>
              <p>
                With PhD student Khang Nguyen, Prof. Guido Montúfar, and two other high school collaborators, I
                worked on a mathematical characterization of the critical points of linear self-attention: the
                places where training can stall, settle, or escape.
              </p>
              <p>
                Linear attention strips the softmax out of a transformer layer, which leaves a model simple enough
                to analyze exactly but rich enough to keep the interesting behavior. Using linear algebra and
                matrix calculus, we asked when these models converge, why some configurations are stable and others
                aren’t, and how the architecture changes that picture.
              </p>
            </div>
            <div className="shrink-0 rounded-xl bg-accent-wash p-6 text-ink lg:w-64">
              <AttentionMatrix className="w-full" />
            </div>
          </div>
          <Bullets
            items={[
              "Contributed to the mathematical analysis, using matrix calculus to derive and characterize the critical points of the training loss",
              "Ran Python experiments to test our theoretical predictions against how trained models actually behave",
              "Presented the work in a talk at UCLA to an audience of about 50",
            ]}
          />
        </Section>

        <Section index="02" title="What I’m curious about">
          <p>
            I’m interested in optimization in high-dimensional systems, bio-inspired algorithms, and where network
            theory meets AI interpretability. I’m especially fascinated by how ideas from dynamical systems and
            graph theory can explain the behavior of modern machine learning models.
          </p>
          <Callout>
            It’s the same question behind <Link to="/mireta" className="link">Mireta</Link>: how do simple local
            rules add up to a system that works? A slime mold finds an efficient network with no plan, and gradient
            descent finds a working model with no plan either. I want to understand both.
          </Callout>
        </Section>
      </Body>
    </>
  );
}
