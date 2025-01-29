import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/local-data";
import PropTypes from "prop-types";

function ArchievesWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <Archieves defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class Archieves extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(), 
      keyword: props.defaultKeyword || "", 
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword }); 
    this.props.keywordChange(keyword);
  }

  render() {
    const filteredArchievedNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          setKeyword={this.onKeywordChangeHandler}
          />
        <NoteList notes={filteredArchievedNotes} />
      </section>
    );
  }
}

Archieves.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchievesWrapper;
