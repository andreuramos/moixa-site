import {Component} from "react"
import "./Header.css"

export default class Header extends Component
{
    render() {
        return (
            <header className="header">
                <section className="header__logo">
                    <img
                        className="header__logo__img"
                        alt="MOIXA LOGO"
                        src="logo.png"
                    />
                </section>
            </header>
        )
    }
}
