import { useTranslations } from "next-intl";

const Logic = ()=>{
    const t = useTranslations();
    // motivation map to subconcept
    const motivationMap = {
        "Work": "Ambitious",
        "Salary/Money": "Ambitious",
        "Health": "Self Love",
        "Self Development": "Self Love",
        "Family": "Heart & Home",
        "Relationship/Friend": "Heart & Home",
        "Spirit/Region": "Soulful Impact",
        "Sharing/Contribution": "Soulful Impact"
      };
     
      const obstacles = Array.from({ length: 10 }, (_, i) => t(`3-1-5.p1.s${i + 1}`));

      
      const obstacleMapping: Array<string | string[]> = [
        "Ambitious",
        "Heart & Home",
       "Self Love",
         "Soulful Impact",
        ["Ambitious", "Heart & Home"],
         ["Ambitious", "Self Love"],
        ["Ambitious", "Soulful Impact"],
         ["Heart & Home", "Self Love"],
        ["Heart & Home", "Soulful Impact"],
         ["Self Love", "Soulful Impact"]
      ]
      
          const mappedObstacles = obstacles.map((obstacle, index) => {
           return { [obstacle]: obstacleMapping[index] }
        });
        
      
      

    



    return (
        <section className="text-white w-full h-[100vh] flex flex-col justify-center items-center">
            <p>Logic</p>
        </section>
    )
}
export default Logic