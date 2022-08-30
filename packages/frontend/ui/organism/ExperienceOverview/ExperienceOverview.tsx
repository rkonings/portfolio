import styles from "./ExperienceOverview.module.css";

import { ExperienceTimeline } from "@ui-organism/ExperienceTimeline/ExperienceTimeline";
import { ExperienceDetails } from "@ui-molecules/ExperienceDetails/ExperienceDetails";
import { Experience } from "@ui-molecules/Experience/Experience";
import { useExperience } from "./useExperience";
import { motion } from "framer-motion";

interface ExperienceOverviewProps {
  experiences: Experience[];
}

export function ExperienceOverview({ experiences }: ExperienceOverviewProps) {
  const { selected, onSelectHandler } = useExperience(experiences);

  const ExperienceDetailsVariants = {
    closed: { opacity: 0, x: "100vw" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className={styles.experience_overview}>
      <div style={{ width: "50%" }}>
        <ExperienceTimeline
          onSelect={onSelectHandler}
          experiences={experiences}
        />
      </div>

      <div style={{ width: "50%" }}>
        <motion.div
          animate={selected ? "open" : "closed"}
          variants={ExperienceDetailsVariants}
          transition={{ duration: 0.2 }}
        >
          {selected && <ExperienceDetails experience={selected} />}
        </motion.div>
      </div>
    </div>
  );
}
