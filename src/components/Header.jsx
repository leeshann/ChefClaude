import '/src/components/componentsCSS/Header.css'

export default function Header() {
    return (
        <header className='header'>
            <section id='headerSection'>
                <img className='logo' src="/src/assets/chef-claude.png" alt="logo" />
                <p className='title'>Chef Claude</p>
            </section>
            <div className='gradient-header-bottom'></div>
        </header>
    )
}