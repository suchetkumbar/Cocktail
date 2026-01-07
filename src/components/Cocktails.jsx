import { cocktailLists, mockTailLists } from "../../constants"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            }
        })

        parallaxTimeLine
        .from('#c-left-lead',{
            x:-100,y:100
        })
        .from('#c-right-lead',{
            x:100,y:100
        })
    })

  return (
    <section className="noisy" id="cocktails">
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf"/>
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf"/>
        <div className="list">
            <div className="popular">
                <h2>Most Popular Cocktails:</h2>

                <ul>
                    {cocktailLists.map((drink) => (
                        <li key={drink.name}>
                            <div className="md:me-28">
                                <h3>{drink.name}</h3>
                                <p>{drink.country}</p>
                            </div>
                            <span>- {drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="loved">
                <h2>Most Loved Mocktails:</h2>

                <ul>
                    {mockTailLists.map((drink) => (
                        <li key={drink.name}>
                            <div className="me-28">
                                <h3>{drink.name}</h3>
                                <p>{drink.country}</p>
                            </div>
                            <span>- {drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails
