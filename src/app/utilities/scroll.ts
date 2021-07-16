type htmlIdType = 'home'|'about'|'experience'|'skill'|'contact' ;

export class Scroll{

  public activeLinkName: htmlIdType = 'home';

  public transfer(htmlId: htmlIdType): void{
    if (htmlId === 'home'){
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }else{
      const element = document.getElementById(htmlId);
      element.scrollIntoView({behavior: 'smooth'});
    }
    this.activeLinkName = htmlId;
  }
}
