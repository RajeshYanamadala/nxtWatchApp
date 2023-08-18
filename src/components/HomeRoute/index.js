import {BsBrightnessHigh} from 'react-icons/bs'
import {AiFillHome, AiFillSave, AiFillFire} from 'react-icons/ai'
import {GiGamepad} from 'react-icons/gi'

import {
  HeadContainer,
  Profile,
  LogOutButton,
  HomeContainer,
  SidebarContext,
  ListItem,
  ContentContainer,
  HomeContent,
  HomeBanner,
  HomeVideosCard,
  BannerParagraph,
  BannerImage,
} from './StyledComponents'

const HomeRoute = () => (
  <HomeContainer>
    <HeadContainer>
      <BsBrightnessHigh />
      <Profile
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />
      <LogOutButton type="button">Logout</LogOutButton>
    </HeadContainer>
    <ContentContainer>
      <SidebarContext>
        <ListItem>
          <AiFillHome color="red" style={{marginRight: 8}} /> Home
        </ListItem>
        <ListItem>
          <AiFillFire style={{marginRight: 8}} />
          Trending
        </ListItem>
        <ListItem>
          <GiGamepad style={{marginRight: 8}} /> Gaming
        </ListItem>
        <ListItem>
          <AiFillSave style={{marginRight: 8}} /> Save videos
        </ListItem>
      </SidebarContext>
      <HomeContent>
        <HomeBanner>
          <BannerParagraph>
            Buy Nxt Premium prepaid plan with UPI
          </BannerParagraph>
          <BannerImage />
        </HomeBanner>
        <HomeVideosCard>video content</HomeVideosCard>
      </HomeContent>
    </ContentContainer>
  </HomeContainer>
)

export default HomeRoute
