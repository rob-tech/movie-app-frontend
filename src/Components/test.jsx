<div class="row mt-5">
  <div class="col-md-6 m-auto">
    <div class="card card-body">
      <h1 class="text-center mb-3">
        <i class="fas fa-user-plus"></i> Register
      </h1>

        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" value={this.state.username} onChange={(val) => this.setState({ username: val.currentTarget.value })} />
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" value={this.state.firstName} onChange={(val) => this.setState({ firstName: val.currentTarget.value })} />
        </div>
        <div class="form-group">
          <label for="surname">Surname</label>
          <input type="text" value={this.state.lastName} onChange={(val) => this.setState({ lastName: val.currentTarget.value })} />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" value={this.state.email} onChange={(val) => this.setState({ email: val.currentTarget.value })} />
        </div>
        <div class="form-group">
          <label for="password">Email</label>
          <input type="password" value={this.state.password} onChange={(val) => this.setState({password: val.currentTarget.value })} />
        </div>
     
        <button type="submit" class="btn btn-primary btn-block" onClick={this.handleSubmit}>
          Register
        </button>

      <p class="lead mt-4">Have An Account? <a href="/login">Login</a></p>
    </div>
  </div>
</div>