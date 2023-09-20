import React, { useState } from 'react'
import '../App.css'

export default function Home(){
    let [style1, setstyle1] = useState({
        zIndex:"10",
        width: "20%",
        height: "20%",
        position: "absolute",
        top: "40%",
        left: "40%",
        border: "3px solid black",
        transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformstyle:"preserve-3d",
        transition:"all 0.5s"
      })
      let [style2, setstyle2] = useState({
        width: "60%",
        height: "40%",
        position: "absolute",
        top: "0",
        left: "0",
        border: "3px solid black",
        transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformstyle:"preserve-3d",
        transition:"all 0.5s",
        zIndex:"1"
      })
      let [style3, setstyle3] = useState({
        width: "40%",
        height: "60%",
        position: "absolute",
        bottom: "0%",
        left: "0%",
        border: "3px solid black",
        transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformstyle:"preserve-3d",
        transition:"all 0.5s",
        zIndex:"-1"
      })
      let [style4, setstyle4] = useState({
        width: "60%",
        height: "40%",
        position: "absolute",
        bottom: "0%",
        right: "0%",
        border: "3px solid black",
        transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformstyle:"preserve-3d",
        transition:"all 0.5s",
        zIndex:"1"
      })
      let [style5, setstyle5] = useState({
        width: "40%",
        height: "60%",
        position: "absolute",
        top: "0%",
        right: "0%",
        border: "3px solid black",
        transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformstyle:"preserve-3d",
        transition:"all 0.5s",
        zIndex:"1"
      })
    function hover1(){
        setstyle1(current => {
            return (
                {
                    zIndex:"10",
                    width: "40%",
                    height: "40%",
                    position: "absolute",
                    top: "40%",
                    left: "40%",
                    border: "3px solid black",
                    transform: "translate3d(-30%, -20%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle: "preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle2(current => {
            return (
                {
                    width: "28%",
                    height: "72%",
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle3(current => {
            return (
                {
                    width: "68%",
                    height: "28%",
                    position: "absolute",
                    bottom: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle4(current => {
            return (
                {
                    width: "32%",
                    height: "68%",
                    position: "absolute",
                    bottom: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle5(current => {
            return (
                {
                    width: "72%",
                    height: "32%",
                    position: "absolute",
                    top: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
    }
    function recover1(){
        setstyle1(current => {
            return (
                {
                    zIndex:"10",
                    width: "20%",
                    height: "20%",
                    position: "absolute",
                    top: "40%",
                    left: "40%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle2(current => {
            return (
                {
                    width: "60%",
                    height: "40%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle3(current => {
            return (
                {
                    width: "40%",
                    height: "60%",
                    position: "absolute",
                    bottom: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle4(current => {
            return (
                {
                    width: "60%",
                    height: "40%",
                    position: "absolute",
                    bottom: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle5(current => {
            return (
                {
                    width: "40%",
                    height: "60%",
                    position: "absolute",
                    top: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })

    }
    function hover2(){
        setstyle1(current => {
            return (
                {
                    zIndex:"10",
                    width: "20%",
                    height: "20%",
                    position: "absolute",
                    top: "40%",
                    left: "40%",
                    border: "3px solid black",
                    transform: "translate3d(50%, 50%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle: "preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle2(current => {
            return (
                {
                    zIndex:"1",
                    width: "70%",
                    height: "50%",
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle3(current => {
            return (
                {
                    zIndex:"-1",
                    width: "50%",
                    height: "50%",
                    position: "absolute",
                    bottom: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle4(current => {
            return (
                {
                    zIndex:"2",
                    width: "50%",
                    height: "30%",
                    position: "absolute",
                    bottom: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle5(current => {
            return (
                {
                    zIndex:"1",
                    width: "30%",
                    height: "70%",
                    position: "absolute",
                    top: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
    }
    function hover3(){
        setstyle1(current => {
            return (
                {
                    zIndex:"10",
                    width: "20%",
                    height: "20%",
                    position: "absolute",
                    top: "40%",
                    left: "40%",
                    border: "3px solid black",
                    transform: "translate3d(75%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle: "preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle2(current => {
            return (
                {
                    zIndex:"1",
                    width: "75%",
                    height: "40%",
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle3(current => {
            return (
                {
                    zIndex:"-1",
                    width: "55%",
                    height: "60%",
                    position: "absolute",
                    bottom: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle4(current => {
            return (
                {
                    zIndex:"1",
                    width: "45%",
                    height: "40%",
                    position: "absolute",
                    bottom: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle5(current => {
            return (
                {
                    zIndex:"1",
                    width: "25%",
                    height: "60%",
                    position: "absolute",
                    top: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
    }
    function hover4(){
        setstyle1(current => {
            return (
                {
                    zIndex:"10",
                    width: "20%",
                    height: "20%",
                    position: "absolute",
                    top: "40%",
                    left: "40%",
                    border: "3px solid black",
                    transform: "translate3d(-20%, -80%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle: "preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle2(current => {
            return (
                {
                    zIndex:"1",
                    width: "56%",
                    height: "24%",
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle3(current => {
            return (
                {
                    zIndex:"-1",
                    width: "36%",
                    height: "76%",
                    position: "absolute",
                    bottom: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle4(current => {
            return (
                {
                    zIndex:"1",
                    width: "64%",
                    height: "56%",
                    position: "absolute",
                    bottom: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle5(current => {
            return (
                {
                    zIndex:"1",
                    width: "44%",
                    height: "44%",
                    position: "absolute",
                    top: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
    }
    function hover5(){
        setstyle1(current => {
            return (
                {
                    zIndex:"10",
                    width: "20%",
                    height: "20%",
                    position: "absolute",
                    top: "40%",
                    left: "40%",
                    border: "3px solid black",
                    transform: "translate3d(-80%, 60%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle: "preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle2(current => {
            return (
                {
                    zIndex:"1",
                    width: "44%",
                    height: "52%",
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle3(current => {
            return (
                {
                    zIndex:"-1",
                    width: "24%",
                    height: "48%",
                    position: "absolute",
                    bottom: "0%",
                    left: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle4(current => {
            return (
                {
                    zIndex:"1",
                    width: "76%",
                    height: "28%",
                    position: "absolute",
                    bottom: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transition:"all 0.5s"
                  }
                  );
        })
        setstyle5(current => {
            return (
                {
                    zIndex:"1",
                    width: "56%",
                    height: "72%",
                    position: "absolute",
                    top: "0%",
                    right: "0%",
                    border: "3px solid black",
                    transform: "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformstyle:"preserve-3d",
                    transition:"all 0.5s"
                  }
                  );
        })
    }
    return (
        <>
        <div className="box">
            <a href="/" className="center" onMouseEnter={hover1} onMouseLeave={recover1} style={style1}>Mili</a>
            <a href="/" className="topleft" onMouseEnter={hover2} onMouseLeave={recover1} style={style2}>Work
            <div className="tlin">This is the work page</div></a>
            <a href="/" className="bottomleft" onMouseEnter={hover3} onMouseLeave={recover1} style={style3}>About
            <div className="blin">This is the work page</div></a>
            <a href="/" className="bottomright" onMouseEnter={hover4} onMouseLeave={recover1} style={style4}>Community
            <div className="brin">This is the work page</div></a>
            <a href="/" className="topright" onMouseEnter={hover5} onMouseLeave={recover1} style={style5}>Connect
            <div className="trin">This is the work page</div></a>
        </div>
        </>
    );
}