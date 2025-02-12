'use client'
import { useEffect, useState } from "react";


const Logic = () => {
    // Assuming both motivation and obstacles are arrays.
    const [motivation, setMotivation] = useState([]);
    const [obstacles, setObstacles] = useState([]);

    useEffect(() => {
        const storedMotivation = localStorage.getItem('motivationGoal');
        const storedObstacles = localStorage.getItem('goal');

        // Convert the JSON string for motivation back into an array (or object)
        if (storedMotivation) {
            try {
                const parsedMotivation  = JSON.parse(storedMotivation);
                setMotivation(parsedMotivation);
            } catch (error) {
                console.error("Error parsing motivation:", error);
            }
        }

        // Convert the JSON string for obstacles back into an array
        if (storedObstacles) {
            try {
                const parsedObstacles = JSON.parse(storedObstacles);
                setObstacles(parsedObstacles);
            } catch (error) {
                console.error("Error parsing obstacles:", error);
            }
        }
    }, []);

    return (
        <section className="w-full justify-start items-center h-lvh flex flex-col">
            <div className="flex flex-col text-white justify-center items-start mt-[248px] font-light text-center">
                {motivation && Array.isArray(motivation) ? (
                    motivation.map((item, idx) => (
                        <p key={idx}>{item.name}</p>
                    ))
                ) : (
                    <p>No motivation found</p>
                )}
            </div>
            <div className="flex flex-col text-white justify-center items-start mt-[248px] font-light text-center">
                {obstacles && Array.isArray(obstacles) ? (
                    obstacles.map((obstacle, idx) => (
                        <p key={idx}>{obstacle}</p>
                    ))
                ) : (
                    <p>No obstacles found</p>
                )}
            </div>
        </section>
    );
};

export default Logic;
