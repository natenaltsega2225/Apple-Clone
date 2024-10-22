import React from 'react';

function Search() {
  return (
    <div>
      <section className="internal-page-wrapper py-5">
        <div className="container">
          <h1 className="display-4 text-center mb-5">Search Results</h1>
          <div className="row">
            <div className="col-md-12">
              {/* Search results go here */}
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-primary"> Search iPhone</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;