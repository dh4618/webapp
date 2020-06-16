import React from 'react'
import img1 from "../assets/images/extension.png"
import img2 from "../assets/images/web-store-main.png"
import img3 from "../assets/images/addtochrome.png"
import img4 from "../assets/images/normal-browsing.png"

export default function extension() {
    return (
        <>
        <div className="extension">
            
           
            <h4>Build a future as you browse.</h4>
            <div className="extension-demo">
                <article className="extension-instr">
                    Have no idea on which company to invest?
                    <br/>
                    Why don't we invest while browsing the Internet?
                    <br/>
                    <br/>
                    Paskala introduces you with the Google Chrome Extension which 
                    automatically find the companies that are available for buying stocks.
                    <br/>
                    <br/>
                    Just install the extension from Google Chrome Extension Library, and 
                    leave everything to us, then you are ready to start off your investing journey!
                </article>


                <article>
                <img style={{width:"210px", height:"auto"}} src={img1}/>
                </article>
            </div>

            <h1>Installing Paskala Google Chrome Extension</h1>
            <div className="extension-demo">
                <article className="extension-instr">
                   <h3> Step 1: Go to Chrome Web Store</h3>
                   <br/>
                   Click <a href="https://chrome.google.com/webstore/category/extensions" >here</a> to go to the Chrome Web Store
                   <br/>and search for "Paskala".
                </article>

                <article>
                <img style={{width:"50vw"}} src={img2}/>
                </article>
            </div>

            <div className="extension-demo">
                <article className="extension-instr">
                   <h3> Step 2: Add to Chrome</h3>
                   <br/>
                   Click on the button "Add to Chrome" and confirm  on the popup 
                   windows.
                </article>

                <article>
                <img style={{width:"50vw"}} src={img3}/>
                </article>
            </div>

            <h3>You are all set up now. Keep Browsing!</h3>
            </div>
         

         {/* how to use the extension */}
         <div className="usingExtension">
         <h1>How to use Paskala extension</h1>
         
         <div className="using-steps">
                <article>
                <img style={{width:"50vw"}} src={img4}/>
                </article>
                <article className="extension-instr">
                   <h3> Step 1: Continue Normal Browsing</h3>
                   <br/>
                blablablablbala
                </article>
            </div>
            <div className="using-steps">
                <article>
                photos showing the popup windows
                </article>
                <article className="extension-instr">
                   <h3> Step 2: Extension will do its job</h3>
                   <br/>
                Click on the icon on the top-right hand corner of your
                browser. The popup window of the extension will show you all
                the companies in the browsing page that are available for investing.
                </article>
            </div>

            <div className="using-steps">
                <article>
                photos showing clicking on the company and directs to single company page
                </article>
                <article className="extension-instr">
                   <h3> Step 3: Pick your choice</h3>
                   <br/>
                Choose the company that you are interested, and checkout its information 
                in our website.
                </article>
            </div>
         </div>
            
        </>
       
    )
}
