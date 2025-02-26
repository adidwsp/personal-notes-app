import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import HomePageAction from "../components/HomePageAction";
import PropTypes from "prop-types";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(), 
      keyword: props.defaultKeyword || "", 
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);

  }


  onKeywordChangeHandler(keyword) {
    this.setState({ keyword }); 
    this.props.keywordChange(keyword);
  }

  

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          setKeyword={this.onKeywordChangeHandler}
          />
        <NoteList notes={filteredNotes} />
        <HomePageAction />  
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
