<script>
export default {
  data() {
    return {
      activeLink: {
        personal: true,
        all: false,
      }
      
    }
  },
  methods: {
    active(activeLink) {
      // update component state
      if(activeLink == 'personal'){
        this.activeLink = {
            personal: true,
            all: false,
        }
      }
      else{
        this.activeLink = {
            personal: false,
            all: true,
        }
      }
      
    }
  }

}
</script>
<template>
  <div class="columns is-mobile is-centered">
    <div
      class="column top-gap is-12-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd"
    >
      <div class="box">
        <h1 class="title text-center">Exercises</h1>
        <div class="tabs is-centered">
          <ul>
            <li :class="{'is-active': activeLink.personal }" @click="active('personal')"><a>My Exercises</a></li>
            <li :class="{'is-active': activeLink.all }" @click="active('all')"><a>All Exercises</a></li>
          </ul>
        </div>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="User"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small has-text-success">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small has-text-danger">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <hr/>
        
      </div>
    </div>
  </div>
</template>
<style>
.top-gap {
  margin-top: 1rem;
}
.text-center {
  text-align: center;
}
</style>
