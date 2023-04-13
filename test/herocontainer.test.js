import Profilemenu from "../components/Profilemenu/Profilemenu";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import HeroContainer from "../components/HeroContainer/HeroContainer";
// import { shallow } from "enzyme"

describe("this test covers all of the functionality of hero container componet ", () => {
  // check that value comming from the api is an image
  let image ={
    type:"image",
    file:"https://via.placeholder.com/150"
  }

  let video ={
    type:"video",
    file:"https://player.vimeo.com/external/617738422.sd.mp4?s=6a95bb7adeca1b00595dcf03857803e894d00cd5&profile_id=165&oauth2_token_id=57447761"
  }
  it("check that value comming from the api is an image", () => {
    render(<HeroContainer file={image} />);
    const imageContainer = screen.getByRole("imagecontainer");
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveStyle(`background-image: url('${image.file}')`);
  });

  it("check that value coming from the api is an video, and display the video section", () => {
    render( 
        <HeroContainer file={video}>
            <div role={"main"}>test</div>
        </HeroContainer>
        
        );
    const containe = screen.getByRole("main");
    expect(containe).toBeInTheDocument();
  });

});
