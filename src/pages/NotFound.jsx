import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/ui";

export default function NotFound() {
  return (
    <PageHero
      seed={404}
      eyebrow="404"
      title="This path doesn’t lead anywhere"
      intro="Even a slime mold hits a dead end sometimes. The page you’re looking for doesn’t exist or has moved."
    >
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary hover:text-white">
          Back to home
        </Link>
        <Link to="/mireta" className="btn-ghost">
          See Mireta
        </Link>
      </div>
    </PageHero>
  );
}
