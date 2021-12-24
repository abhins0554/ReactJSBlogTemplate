import React from 'react';

function PostContent({data}) {
  console.log(data);
    const data1 = `<h1><span style="color: rgb(0,0,0);">sdgsdgsd</span><span style="color: rgb(0,0,0);font-size: 18px;">gsdgsdg sgsdggsdgsdg sdgsdgsdgsdgg sdg sdg</span><a href="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" target="_blank"><span style="color: rgb(0,0,0);font-size: 18px;">sdgs gsdgg sdg gsdg </span></a>&nbsp;</h1> <p style="text-align:justify;"><span style="color: rgb(0,0,0);font-size: 18px;">gjfgjfgjfgjff jfgjf jfgj f </span><span style="color: rgb(0,0,0);">fgj fgj fgjf gjfgjfgjfgj gjfgj f gjj </span></p> <div style="text-align:right;"><img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" alt="undefined" style="height: auto;width: auto"/></div> <pre>sdfasfafasf cbdf&nbsp;</pre> <pre><iframe width="auto" height="auto" src="https://quickblogtech-storage.web.app/" frameBorder="0"></iframe>&lt;h1&gt;&lt;span style="color: rgb(0,0,0);"&gt;sdgsdgsd&lt;/span&gt;&lt;span style="color: rgb(0,0,0);font-size: 18px;"&gt;gsdgsdg sgsdggsdgsdg sdgsdgsdgsdgg sdg sdg&lt;/span&gt;&lt;a href="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" target="_blank"&gt;&lt;span style="color: rgb(0,0,0);font-size: 18px;"&gt;sdgs gsdgg sdg gsdg &lt;/span&gt;&lt;/a&gt;&amp;nbsp;&lt;/h1&gt; &lt;p style="text-align:justify;"&gt;&lt;span style="color: rgb(0,0,0);font-size: 18px;"&gt;gjfgjfgjfgjff jfgjf jfgj f &lt;/span&gt;&lt;span style="color: rgb(0,0,0);"&gt;fgj fgj fgjf gjfgjfgjfgj gjfgj f gjj &lt;/span&gt;&lt;/p&gt; &lt;div style="text-align:right;"&gt;&lt;img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" alt="undefined" style="height: auto;width: auto"/&gt;&lt;/div&gt; &lt;pre&gt;sdfasfafasf cbdf&amp;nbsp;&lt;/pre&gt; &lt;iframe width="auto" height="auto" src="https://quickblogtech-storage.web.app/" frameBorder="0"&gt;&lt;/iframe&gt; &lt;p&gt;&lt;/p&gt;</pre> <p></p>`;
    return (
      <div className="post-content-body">
        <div dangerouslySetInnerHTML={{ __html: data1 }} />
      </div>
    );
}

export default PostContent;