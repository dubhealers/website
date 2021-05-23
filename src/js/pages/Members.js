import Member from "./Member";
import doktor from "../../img/doktorlond.jpg";
import soren from "../../img/soren.jpg";
import jesper from "../../img/jesper.jpg";

export default function Members() {
    return (
        <>
            <Member name={"Doktor Lond"} image={doktor}>
                <p>
                    <i>Bandleader. Moog bass. Rhythm keyboards. Effect machines.</i>
                </p>
                <p>
                    Founder, band leader, composer and arranger. After spending more than 10 years producing and live
                    mixing his own productions, Doktor Lond has some funny ideas. Some of them are even
                    practically possible! Does his best to be the kind leader - but we all know if we play
                    something that does not fit his funny ideas, we get that look!
                </p>
                <p>
                    Playing basslines on his old Mini Moog synthesizer with one hand. Playing the classic keyboard
                    skanks with the other hand. Doktor Lond is half of the bands rhythm section. On top of that he's
                    controlling his own dub effects using foot pedals <i>and</i> somehow managing to be the band leader.
                </p>
                <p>
                    Has been part of the danish reggae/dub scene since around 2000.
                </p>
            </Member>
            <Member name={"Søren Lorentzen"} image={soren} right>
                <p>
                    <i>Lead/rhythm Keyboards. Effect machines.</i>
                </p>
                <p>
                    Hosts the band rehearsal room in his cellar. So far he didn't get any complaints from the neighbors.
                    We are not sure why. Maybe they really really like bass or maybe they are afraid to say anything.
                    But we like to think they enjoy getting some free dub healing.
                </p>
                <p>
                    Doing all the funky organ bubbling, rhythm synths and leads. And like the Doktor, controlling
                    dub effects using foot pedals. Together with Doktor Lond, Søren was part of the
                    legendary - though little known - experimental live dub orchestra 'Propaganja'.
                </p>
            </Member>
            <Member name={"Jesper Rasch"} image={jesper}>
                <p>
                    <i>Drums. Effect machines.</i>
                </p>
                <p>
                    Jesper is a big fan of Piet van Deurs, which will be known by those who's been following danish
                    national TV for .. well quite some time ago. We guess that explains a lot about Jesper.
                </p>
                <p>
                    Combing classic heavy reggae beats with jazzy elements along with creative use of effects and effect
                    machines. Resulting in a unique style of dub drumming.
                </p>
                <p>
                    Back when Doktor Lond - as a piano player and band leader - was playing Monk style classic bebop,
                    Jesper was part of the Ole Lond Trio. So he must have known what he was getting into when joining
                    the Dub Healers. With all the funny band leader ideas and all that.
                </p>
            </Member>
        </>
    );
}
