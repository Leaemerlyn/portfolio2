import { ProjectDetailsIntro } from "./ProjectDetailsIntro";
import { Button } from "../Button";

export function PennResources() {
  return (
    <>
      <div class="projectPageContainer">
        <ProjectDetailsIntro title="PennResources" />
        <hr />
        <h1>Check out the site!</h1>
        <Button
          href="https://pennresources.web.app/"
          buttonText="Project Website"
        />{" "}
        <br />
        <hr />
        <h1>Inspiration</h1>
        <p>
          Our website, Penn Resources, is designed to share supplemental
          learning resources that former and current students found helpful to
          their learning. The inspiration for our website came from
          mcitcentral.com, which is a website where students can post reviews of
          their experiences in completed courses. Many students at Penn often
          share supplemental material through slack, but these resources can get
          buried in the chats. Our team created a hub of study materials for
          students. We believe this tool can be valuable for those who want to
          reinforce content taught in lecture.
        </p>
        <h1>What it does</h1>
        <p>
          Penn Resources is a student-driven website for sharing study resources
          among the Penn community. By student-driven, we mean that students can
          post supplemental learning material with a title, URL, and brief
          description of its usefulness for specific courses and modules. For
          example, student A comes across an article explaining the differences
          between an ArrayList and Linked List and decides to share it in hopes
          of helping their peers. Anyone with internet connection can search the
          website for such resources to illuminate a concept or topic covered in
          the course lectures. The post’s author can also edit (and delete)
          their posts in case they made a mistake in their original post.
          Lastly, students are allowed to upvote posts that were particularly
          helpful, thereby helping site visitors identify popular resources
          quickly.
        </p>
        <h1>What it does</h1>
        <p>
          We used React as our JavaScript framework to build our app. We also
          used RSuite JS for our component library. As for the backend, we use
          Firebase, a backend infrastructure service provided by Google, to
          store the resources shared by students and authenticate users’
          identity as SEAS students via Google Sign-In.{" "}
        </p>
      </div>
    </>
  );
}
