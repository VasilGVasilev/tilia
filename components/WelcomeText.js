import { motion } from "framer-motion"
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
  };
  
  const letterVariant = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };
const WelcomeText = () => {
  return (
    <motion.div 
        className="text-justify font-semibold text-gray-700"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.6}}

    >
        <motion.span variants={letterVariant}> Изпълнението</motion.span>
        <motion.span variants={letterVariant}> и</motion.span>
        <motion.span variants={letterVariant}> всички</motion.span>
        <motion.span variants={letterVariant}> довършителни</motion.span>
        <motion.span variants={letterVariant}> работи</motion.span>
        <motion.span variants={letterVariant}> са</motion.span>
        <motion.span variants={letterVariant}> заложени</motion.span>
        <motion.span variants={letterVariant}> в</motion.span>
        <motion.span variants={letterVariant}> изключително</motion.span>
        <motion.span variants={letterVariant}> висок</motion.span>
        <motion.span variants={letterVariant}> -</motion.span>
        <motion.span variants={letterVariant}> бутиков</motion.span>
        <motion.span variants={letterVariant}> клас.</motion.span>
        <motion.span variants={letterVariant}> Ixora</motion.span>
        <motion.span variants={letterVariant}> Residence</motion.span>
        <motion.span variants={letterVariant}> се</motion.span>
        <motion.span variants={letterVariant}> състои</motion.span>
        <motion.span variants={letterVariant}> от</motion.span>
        <motion.span variants={letterVariant}> 13</motion.span>
        <motion.span variants={letterVariant}> просторни</motion.span>
        <motion.span variants={letterVariant}> апартамента</motion.span>
        <motion.span variants={letterVariant}> и</motion.span>
        <motion.span variants={letterVariant}> 17</motion.span>
        <motion.span variants={letterVariant}> гаража.</motion.span>
        <motion.span variants={letterVariant}> Апартаментите</motion.span>
        <motion.span variants={letterVariant}> разкриват</motion.span>
        <motion.span variants={letterVariant}> чудесна</motion.span>
        <motion.span variants={letterVariant}> панорамна</motion.span>
        <motion.span variants={letterVariant}> гледка</motion.span>
        <motion.span variants={letterVariant}> към</motion.span>
        <motion.span variants={letterVariant}> София</motion.span>
        <motion.span variants={letterVariant}> и</motion.span>
        <motion.span variants={letterVariant}> Витоша,</motion.span>
        <motion.span variants={letterVariant}> а</motion.span>
        <motion.span variants={letterVariant}> сградата</motion.span>
        <motion.span variants={letterVariant}> разполага</motion.span>
        <motion.span variants={letterVariant}> с</motion.span>
        <motion.span variants={letterVariant}> напълно</motion.span>
        <motion.span variants={letterVariant}> оборудвани</motion.span>
        <motion.span variants={letterVariant}> спа</motion.span>
        <motion.span variants={letterVariant}> център</motion.span>
        <motion.span variants={letterVariant}> и</motion.span>
        <motion.span variants={letterVariant}> фитнес</motion.span>
        <motion.span variants={letterVariant}> зала</motion.span>
        <motion.span variants={letterVariant}> за</motion.span>
        <motion.span variants={letterVariant}> ексклузивно</motion.span>
        <motion.span variants={letterVariant}> ползване</motion.span>
        <motion.span variants={letterVariant}> от</motion.span>
        <motion.span variants={letterVariant}> бъдещите</motion.span>
        <motion.span variants={letterVariant}> обитатели.</motion.span>
        <motion.span variants={letterVariant}> Вертикалната</motion.span>
        <motion.span variants={letterVariant}> планировка</motion.span>
        <motion.span variants={letterVariant}> по</motion.span>
        <motion.span variants={letterVariant}> специален</motion.span>
        <motion.span variants={letterVariant}> ландшафтен</motion.span>
        <motion.span variants={letterVariant}> проект</motion.span>
        <motion.span variants={letterVariant}> оформя</motion.span>
        <motion.span variants={letterVariant}> зелен</motion.span>
        <motion.span variants={letterVariant}> пояс</motion.span>
        <motion.span variants={letterVariant}> около</motion.span>
        <motion.span variants={letterVariant}> сградата,</motion.span>
        <motion.span variants={letterVariant}> който</motion.span>
        <motion.span variants={letterVariant}> създава</motion.span>
        <motion.span variants={letterVariant}> усещане</motion.span>
        <motion.span variants={letterVariant}> за</motion.span>
        <motion.span variants={letterVariant}> живот</motion.span>
        <motion.span variants={letterVariant}> в</motion.span>
        <motion.span variants={letterVariant}> паркова</motion.span>
        <motion.span variants={letterVariant}> среда.</motion.span>
    </motion.div>
  )
}

export default WelcomeText
