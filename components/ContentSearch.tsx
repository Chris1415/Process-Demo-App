import { getContentList } from "../pages/api/queries/Contents/GetContentList";
import ContentList from ".//ContentList";
import { contentI } from "../interfaces";
import { Component } from "react";
import { RenditionTypes } from "../Consts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from '../styles/Home.module.css'

interface PassedProps {
  contents: any;
}

class ContentSearch extends Component<PassedProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      contentName: "",
      contents: props.contents,
      // products: []
    };

    this.submitConentSearchForm = this.submitConentSearchForm.bind(this);
    this.onContentNameChange = this.onContentNameChange.bind(this);
  }

  state = {
    contentName: "",
    contents: [] as contentI[],
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <form onSubmit={this.submitConentSearchForm}>
                  <label 
                    className={[styles.OneThird].join(" ")}
                    htmlFor="contentName"> <b>Suche nach Nachrichten:</b> </label>
                    <br/>
                  <input className={[styles.TwoThird].join(" ")}
                    type="text"
                    placeholder="Namen eingeben"
                    value={this.state.contentName}
                    name="contentName"
                    onChange={this.onContentNameChange}
                  />
                  <button className={[styles.formSubmitButton, styles.OneThird].join(" ")} type="submit">Suchen</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <hr/>
        <ContentList
          contents={this.state.contents}
          grid={4}
          renditionType={RenditionTypes.Preview}
          displayNumberResults={true}
        />
      </div>
    );
  }

  submitConentSearchForm = async (event: any) => {
    event.preventDefault();
    console.log(this.state.contentName);
    const { content } = await getContentList(false, this.state.contentName);
    console.log(content.length);
    this.setState({ contents: content });
  };

  onContentNameChange = (event: any) => {
    this.setState({ contentName: event.target.value });
  };
}

export default ContentSearch;
