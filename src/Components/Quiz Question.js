import { useEffect, useState } from "react";
import { useNavigate ,useLocation } from "react-router-dom";



function Question({ questionno, questionbody, opta, optb, optc, optd, rightans, score, setScore }) {
    const location = useLocation();
    const currentNo = Number(location.pathname.slice(1)) || 0; // "/2" → 2
    const nextPath = "/" + (currentNo + 1);

    const [showHeart, setShowHeart] = useState(false);
    const [emoji,setEmoji] = useState("");
    const navigate = useNavigate();
    const handleOptionClick = (option) => {

        if (option === rightans) {
            if(showHeart===false) setScore(score+1);
            setEmoji("🥰");
            setShowHeart(true);
            setTimeout(() => setShowHeart(false), 2000);
        }

        else{
            setEmoji("😡");
            setShowHeart(true);
            setTimeout(() => setShowHeart(false), 2000);

        }
    }


        return (
            <>
                <div className="quiz-wrapper">
                    <div className="quiz-card">

                        <div className="score">
                            Score: {score}/4
                        </div>

                        <div className="question">
                            {questionbody}
                        </div>

                        <button className="option" onClick={() => {handleOptionClick(opta);
                            
                            setTimeout(()=>navigate(nextPath),2000);}}>{opta}</button>
                        <button className="option" onClick={() => {handleOptionClick(optb);
                            
                            setTimeout(()=>navigate(nextPath),2000);}}>{optb}</button>
                        <button className="option" onClick={() => {handleOptionClick(optc);
                            
                            setTimeout(()=>navigate(nextPath),2000);}}>{optc}</button>
                        <button className="option" onClick={() => {handleOptionClick(optd);
                            
                            setTimeout(()=>navigate(nextPath),2000);}}>{optd}</button>

                    </div>
                </div>
                {showHeart && <div className="heart">{emoji}</div>}

            </>
        );


    };

    export default Question;