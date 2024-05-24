import { Skill } from "../../models/skill";
import { motion } from "framer-motion";

interface Props {
  skill: Skill;
}

export default function SkillProgress({ skill }: Props) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.progress}%` }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </div>
  );
}
