import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../constants"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#content h2', {
            type: "words"})
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: "top center",
            },
            ease: "power1.inOut",
        })

        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#content h3, contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: -50, duration: 1, ease: 'power1.inOut',
            })
            .to('#f-left-leaf', {
                y: -50, duration: 1, ease: 'power1.inOut',
            }, '<')
        })

  return (
    <footer id='contact'>
        <img src='/images/footer-right-leaf.png' alt='leaf-right' id='f-right-leaf'/>
        <img src='/images/footer-left-leaf.png' alt='leaf-left' id='f-left-leaf'/>
    <div className='content'> 
        <h2>Where to find Us</h2>
        <div>
            <h3>Visit Our Store</h3>
            <p>(555)963-1144</p>
            <p>pinogallegos.gabriel@gmail.com</p>
        </div>
        <div>
            <h3>Open Every Day</h3>
            {openingHours.map((time) => (
                <p key={time.day}>
                    {time.day}: {time.time}
                </p>
            ))}
        </div>
        <div className="flex-center gap-5">
            {
                socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                    >
                        <img src={social.icon}/>
                    </a>
                ))    
        }
        </div>
    </div>
    </footer>
  )
}

export default contact