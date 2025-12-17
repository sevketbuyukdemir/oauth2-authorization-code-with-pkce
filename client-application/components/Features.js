import styles from "./Features.module.css";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Public Access",
    description:
      "This homepage content is visible to everyone without requiring a login session.",
  },
  {
    title: "Secure Token",
    description:
      "JWT handling happens securely in the background using standard OIDC protocols.",
  },
  {
    title: "Fast Integration",
    description:
      "Built for modern web standards, ensuring fast and secure authentication flows.",
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>Demo Features</h3>
          <p className={styles.description}>
            Explore the components of this authentication demonstration built
            for modern security standards.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
