<template>
  <div class="Contribute">
    <div class="row justify-content-center bg-light mt-2">
      <div class="col-8">
        <div class="jumbotron bg-light">
          <form>
            <div class="form-group row">
              <label for="linkName" class="col-2 col-from-label">Name</label>
              <div class="col-10">
                <input
                  type="text"
                  class="form-control"
                  id="linkName"
                  placeholder="Enter name of resource"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="linkName" class="col-2 col-from-label">Link</label>
              <div class="col-10">
                <input
                  type="text"
                  class="form-control"
                  id="linkName"
                  placeholder="https://somelink.info"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="linkName" class="col-2 col-from-label">Description</label>
              <div class="col-10">
                <textarea
                  class="form-control"
                  name="description"
                  id="resourceDescription"
                  cols="30"
                  rows="4"
                  placeholder="Please be specific & short"
                  maxlength="100"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
