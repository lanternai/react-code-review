import styles from "./page.module.css";
import NetProfitCalculator from "@/components/NetProfitCalculator";

export default function Home() {
  return (
    <div className={styles.page}>
      <NetProfitCalculator />
    </div>
  );
}
