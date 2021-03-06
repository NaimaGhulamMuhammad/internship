import React from "react"
const Single=(props)=>{

    return(
<>
<div class="content-area blog-page padding-top-40" style={{backgroundColor: "#FCFCFC", paddingBottom: "55px"}}>
<div class="container">
    <div class="row">
        <div class="blog-lst col-md-9 p0">
            <section id="id-100" class="post single">

                <div class="post-header single">
                    <div class="">
                        <h2 class="wow fadeInLeft animated">FASHIN NOW 2016</h2>
                        <div class="title-line wow fadeInRight animated"></div>
                    </div>
                    <div class="row wow fadeInRight animated">
                        <div class="col-sm-6">
                            <p class="author-category">
                                By <a href="#">John Snow</a>
                                in <a href="blog.html">Webdesign</a>
                            </p>
                        </div>
                        <div class="col-sm-6 right" >
                            <p class="date-comments">
                                <a href="single.html"><i class="fa fa-calendar-o"></i> June 20, 2013</a>
                                <a href="single.html"><i class="fa fa-comment-o"></i> 8 Comments</a>
                            </p>
                        </div>
                    </div>
                    <div class="image wow fadeInRight animated"> 
                    <img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />
                    </div>
                </div> 

                <div id="post-content" class="post-body single wow fadeInLeft animated">
                    <p>
                        <strong>Pellentesque habitant morbi tristique</strong> 
                        senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                        semper. <em>Aenean ultricies mi vitae est.</em> 
                        Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean
                        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
                    <p>
                    <img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />
                    </p>

                    <h2>Header Level 2</h2>
                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                    </ol>

                    <blockquote>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada
                            tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
                        </p>
                    </blockquote>

                    <h3>Header Level 3</h3>

                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                        ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                    </ul>
                    <p>
                    <img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                        condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
                        eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                    </p>
</p>
                </div>
                <div class="post-footer single wow fadeInBottum animated">
                    <ul class="pager">
                        <li class="previous"><a href="#"><i class=""></i>← Older </a></li>
                        <li class="next disabled"><a href="#">Newer →<i class=""></i> </a></li>
                    </ul> 
                </div>    

            </section> 

            <section class="about-autor">

            </section>

            <section id="comments" class="comments wow fadeInRight animated"> 
                <h4 class="text-uppercase wow fadeInLeft animated">3 comments</h4>


                <div class="row comment">
                    <div class="col-sm-3 col-md-2 text-center-xs">
                        <p>
                        <img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />
                        </p>
                    </div>
                    <div class="col-sm-9 col-md-10">
                        <h5 class="text-uppercase">Julie Alma</h5>
                        <p class="posted"><i class="fa fa-clock-o"></i> September 23, 2011 at 12:00 am</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <p class="reply"><a href="#"><i class="fa fa-reply"></i> Reply</a>
                        </p>
                    </div>
                </div>
      


                <div class="row comment last">

                    <div class="col-sm-3 col-md-2 text-center-xs">
                        <p>
                        <img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />

                             </p>
                    </div>

                    <div class="col-sm-9 col-md-10">
                        <h5 class="text-uppercase">Louise Armero</h5>
                        <p class="posted"><i class="fa fa-clock-o"></i> September 23, 2012 at 12:00 am</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <p class="reply"><a href="#"><i class="fa fa-reply"></i> Reply</a>
                        </p>
                    </div>

                </div>
              
            </section>

            <section id="comment-form" class="add-comments">
                <h4 class="text-uppercase wow fadeInLeft animated">Leave comment</h4>
                <form>
                    <div class="row wow fadeInLeft animated">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="name">Name <span class="required">*</span>
                                </label>
                                <input class="form-control" id="name" type="text">
                          </input>  </div>
                        </div>
                    </div>

                    <div class="row wow fadeInLeft animated">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="email">Email <span class="required">*</span>
                                </label>
                                <input class="form-control" id="email" type="text">
                           </input> </div>
                        </div>
                    </div>

                    <div class="row wow fadeInLeft animated">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="comment">Comment <span class="required">*</span>
                                </label>
                                <textarea class="form-control" id="comment" rows="4"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="row wow fadeInLeft animated">
                        <div class="col-sm-12 text-right">
                            <button class="btn btn-primary"><i class="fa fa-comment-o"></i> Post comment</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>                    

 
        <div class="blog-asside-right col-md-3">
            <div class="panel panel-default sidebar-menu wow fadeInRight animated" >
                <div class="panel-heading">
                    <h3 class="panel-title">Text widget</h3>
                </div>
                <div class="panel-body text-widget">
                    <p>Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage mr be. Hold do at tore in park feet near my case.
                    </p>
                </div>
            </div>

            <div class="panel panel-default sidebar-menu wow  fadeInRight animated">
                <div class="panel-heading">
                    <h3 class="panel-title">Search</h3>
                </div>
                <div class="panel-body">
                    <form role="search">
                        <div class="input-group">
                            <input class="form-control" placeholder="Search" type="text">
                          </input>  <span class="input-group-btn">
                                <button type="submit" class="btn btn-smal">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

            
            
                <div class="panel panel-default sidebar-menu wow fadeInRight animated">
                    <div class="panel-heading">
                        <h3 class="panel-title">Recommended</h3>
                    </div>
                    <div class="panel-body recent-property-widget">
                            <ul>
                            <li>
                                <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                                    <a href="single.html"><img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />
                                    </a>
                                    <span class="property-seeker">
                                        <b class="b-1">A</b>
                                        <b class="b-2">S</b>
                                    </span>
                                </div>
                                <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                                    <h6> <a href="single.html">Super nice villa </a></h6>
                                    <span class="property-price">3000000$</span>
                                </div>
                            </li>
                            <li>
                                <div class="col-md-3 col-sm-3  col-xs-3 blg-thumb p0">
                                    <a href="single.html"><img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />
                                    </a>
                                    <span class="property-seeker">
                                        <b class="b-1">A</b>
                                        <b class="b-2">S</b>
                                    </span>
                                </div>
                                <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                                    <h6> <a href="single.html">Super nice villa </a></h6>
                                    <span class="property-price">3000000$</span>
                                </div>
                            </li>
                            <li>
                                <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                                    <a href="single.html"><img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />
                                    </a>
                                    <span class="property-seeker">
                                        <b class="b-1">A</b>
                                        <b class="b-2">S</b>
                                    </span>
                                </div>
                                <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                                    <h6> <a href="single.html">Super nice villa </a></h6>
                                    <span class="property-price">3000000$</span>
                                </div>
                            </li>

                            <li>
                                <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                                    <a href="single.html"><img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />
                                    </a>
                                    <span class="property-seeker">
                                        <b class="b-1">A</b>
                                        <b class="b-2">S</b>
                                    </span>
                                </div>
                                <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                                    <h6> <a href="single.html">Super nice villa </a></h6>
                                    <span class="property-price">3000000$</span>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                

            <div class="panel sidebar-menu wow  fadeInRight animated">
                <div class="panel-heading">
                    <h3 class="panel-title">Tags</h3>
                </div>
                <div class="panel-body">
                    <ul class="tag-cloud">
                        <li><a href="#"><i class="fa fa-tags"></i> html5</a> 
                        </li>
                        <li><a href="#"><i class="fa fa-tags"></i> css3</a> 
                        </li>
                        <li><a href="#"><i class="fa fa-tags"></i> jquery</a> 
                        </li>
                        <li><a href="#"><i class="fa fa-tags"></i> ajax</a> 
                        </li>
                        <li><a href="#"><i class="fa fa-tags"></i> php</a> 
                        </li>
                        <li><a href="#"><i class="fa fa-tags"></i> responsive</a> 
                        </li>
                        <li><a href="#"><i class="fa fa-tags"></i> visio</a> 
                        </li>
                        <li><a href="#"><i class="fa fa-tags"></i> bootstrap</a> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
        
    </div>

</div>
</div>


</>
    );
}
export default Single;