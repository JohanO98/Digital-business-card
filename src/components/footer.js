import React from "react"
import Facebook from "../images/Facebook Icon.png"
import Github from "../images/GitHub Icon.png"
import Instagram from "../images/Instagram Icon.png"
import Twitter from "../images/Twitter Icon.png"
import LinkedIn from "../images/Linkedin Icon.png"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="icon-container">
            <img src={Twitter} className="footer-icon" alt ="Twitter Logo Button"></img>
            <img src={Facebook} className="footer-icon"alt ="Facebook Logo Button"></img>
            <img src={Instagram} className="footer-icon"alt ="Instagram Logo Button"></img>
            <img src={LinkedIn} className="footer-icon"alt ="LinkedIn Logo Button"></img>
            <img src={Github} className="footer-icon"alt ="GitHub Logo Button"></img>
            </div>

        </div>
    )
}