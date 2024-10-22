import '../css/artikel.css'
import gambar1 from '../img/titanic 1.jpeg'
import gambar2 from '../img/titanic 2.jpeg'
const Artikel = () => {

    return (
        <div className='baro mt-20'>
            <div className="article-container px-6 py-10    pt-30 pb-20   mx-auto " >
                <header className='h1'>
                    <h1 className='font-bold '>Why do LSA and FFE have to be inspected periodically?</h1>
                </header>

                <section className="introduction">

                    <img src={gambar1} className='image-article' />
                    <p className='font-serif'>The sinking of the Titanic after hitting an iceberg on April 14, 1912, which killed more than 1,500 passengers and crew, has raised many questions about shipping safety standards. It is considered that a ship like the Titanic should have enough lifeboats for all passengers. The Titanic should have carried up to 50% more lifeboats than were available on board at the time of the accident. The Titanic is also said to have experienced a fire shortly before it sank. This is thought to have contributed to the problem of damage to the ship's hull, which accelerated the sinking of the ship after the collision.</p>
                </section>

                <section className="content">

                    <p className='font-serif'>The Titanic tragedy inspired various efforts to evaluate shipping safety standards until the first SOLAS (Safety of Life At Sea) conference was held in 1914. This conference, which was spearheaded by the British Empire, was attended by representatives from 13 countries, introducing shipping safety requirements for commercial ships, which consisted of: provision of watertight partitions, use of fire-resistant materials; safety equipment, prevention and fire fighting equipment, including mandatory use of radio/telegraph for ships carrying more than 50 people.</p>
                    <img src={gambar2} className='image-article' />
                    <p className='font-serif'>SOLAS was adopted on January 20, 1914 and signed by only 5 countries. However, this first generation of SOLAS was canceled because the First World War broke out in Europe. However, SOLAS 1914 was applied quite massively in England, France, the United States and several Scandinavian countries. The 1960 SOLAS Conference – the results of which were adopted on 17 June 1960 and came into force on 26 May 1965 – became the first task for IMCO which was only formed in 1958.
                        IMCO is an Inter-Governmental Maritime Consultative Organization which later changed its name to IMO in 1982.
                        IMO was formed in Geneva, Switzerland by the United Nations and has its offices in London, England to this day. With the implementation of the above acceptance procedures,
                        IMO can work systematically to discuss proposals for improving the convention according to developments in the shipping industry. SOLAS is a maritime safety standard that must be applied to merchant vessels of certain sizes and is the parent for the publication of various standards (codes) for ship construction, equipment and operations.</p>

                    <p className='font-serif'>LSA or Life Saving Appliance is a safety standard that must be met by a ship, to ensure the safety of the crew in the event of a disaster. Meanwhile, FFE or Fire Fighting Equipment or what is usually interpreted as a fire extinguisher is a tool that is used to anticipate, overcome or deal with if there is a detection of fire in a place or location. It is important for LSA & FFE to be used correctly in emergency situations, for example: abandoning a ship, people falling overboard, fires, marine pollution, ship accidents and other emergency conditions. The LSA & FFE placed on the ship must comply with the Safety/Fire Plan that has been approved by the Classification Bureau or the Department of Maritime Transportation.</p>
                </section>

                <section className="conclusion">

                    <p className='font-serif'>To ensure that extinguishers can work properly when needed, regular and thorough inspections are needed. All checks must be handled directly by trained Technicians & Engineers, and under the auspices of a verified service station deemed suitable by Class to handle annual servicing of fire extinguisher tubes and LSA equipment, such as ClassNK, Lloyd Register, DNV, RINA, BV, BKI, and the like.</p>
                    <p className='font-serif'>For regular LSA and FFE inspection services by a professional, experienced and world class IACS verified service station, you can contact us PT. Haekal Inti Pratama at the contact listed on our website.</p>
                </section>
            </div>
        </div>
    )

}

export default Artikel;