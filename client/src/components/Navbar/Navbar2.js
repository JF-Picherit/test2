class Header extends React.Component {
    constructor() {
      super();
  
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
      this.sidebarClick = this.sidebarClick.bind(this);
      this.navbarScroll = this.navbarScroll.bind(this);
  
      this.state = {
        sidenavVisible: false,
      };
    } 
  
    handleClick() {
      var hamburger = document.getElementById("hamburger");
      var sidenav = document.getElementById("mySidenav");
      var menuoverlay = document.getElementById("menu-overlay");
      if (!this.state.sidenavVisible) {
         sidenav.classList.add("show");
         hamburger.classList.add("close");
        menuoverlay.classList.add("active");
        document.addEventListener('click', this.handleOutsideClick, false);
      } else {
  
        document.removeEventListener('click', this.handleOutsideClick, false);
        sidenav.classList.remove("show");
        hamburger.classList.remove("close");
         menuoverlay.classList.remove("active");
      }
  
      this.setState(prevState => ({
         sidenavVisible: !prevState.sidenavVisible,
      }));
    }
    
    handleOutsideClick(e) {
      // ignore clicks on the component itself
      if (this.node.contains(e.target) && !hamburger) {
        return;
      } 
      this.handleClick();
    }
    
  sidebarClick() {
        document.getElementById("mySidenav").addEventListener("click", function(event){
            event.stopPropagation()
        })
    }
  navbarScroll() {
   window.addEventListener('scroll', function() {
      var header = document.getElementById("main-header");   
       if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
       header.classList.add("minimize");
    } else {
       header.classList.remove("minimize");
    }  
   });
    }
  
    render() {
      return (
                <header className="main-header" id="main-header" ref={node => {this.node = node;}} onLoad={this.navbarScroll}>
                <div className="hamburger-wrapper">
                <button type="button" className="hamburger" id="hamburger" onClick={this.handleClick}>
                <span className="hamburger-text-wrap">
                <span className="hamburger-text-open hamburger-text">menu</span>
                <span className="hamburger-text-close hamburger-text">close</span>    
                </span>
                <span className="hamburger-line-wrap">
                <span className="hamburger-line hamburger-line-1"></span>
                <span className="hamburger-line hamburger-line-2"></span>
                <span className="hamburger-line hamburger-line-3"></span>   
                </span>     
                </button> 
                </div>        
                <div className="container">
                <div className="logo-and-menu-container">    
                <div id="menu-overlay"></div>
                <div className="logo-column"><div className="logo-wrapper">
                <a href="#" className="header-logo logo-image">
                <img src="https://www.vankeijsteren.com/wp-content/uploads/2015/02/Hond-4.jpg" alt="logo"></img>
                <h1>Yellibeanz</h1>
                </a>
                </div>
                </div>
                <div className="menu-column">
                <div className="standard-menu-container">
                <nav>
                <div className="sidenav-container" id="mySidenav" onMouseOver={this.sidebarClick}>
                <div className="sidenav-container-inner">
                <ul>
                <li className="menu-item"><a href="#">Home</a></li>
                <li className="menu-item"><a href="">About</a></li>
                <li className="menu-item"><a href="">Work</a></li>
                <li className="menu-item"><a href="">Front-end</a></li>
                </ul>
                </div>
                </div>
                <div id="menu-main" className="menu-main">
                <ul>
                <li className="menu-item"><a href="#" aria-current="page">Home</a></li>
                <li className="menu-item"><a href="#">About</a></li>
                <li className="menu-item"><a href="#">Work</a></li>
                <li className="menu-item"><a href="#">Front-end</a></li>
                </ul>
                </div>
                </nav>
                </div>
                </div>
                </div> 
                </div>
                </header>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('App'));