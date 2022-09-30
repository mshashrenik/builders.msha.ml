import { Footer } from "flowbite-react";

export default function Bottom() {
  return (
    <Footer container={true} rounded={true}>
      <Footer.LinkGroup>
        <Footer.Link href="https://github.com/mshashrenik/builders.msha.ml/blob/main/LICENSE">
          Copyright (C) 2022 Shrenik S
        </Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup>
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="/contact">Contact</Footer.Link>
        <Footer.Link href="https://www.christinak12.org/honorsacademy">
          MSHA
        </Footer.Link>
        <Footer.Link href="https://www.kiwanis.org/">Kiwanis</Footer.Link>
        <Footer.Link href="https://forms.gle/xezWd6mZX7fDxvEVA">
          Feedback
        </Footer.Link>
        <Footer.Link href="https://github.com/mshashrenik/builders.msha.ml/">
          Github
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
