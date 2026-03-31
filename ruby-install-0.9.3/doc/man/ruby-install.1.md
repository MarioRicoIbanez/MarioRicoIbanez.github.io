# ruby-install 1 "Aug 2018" ruby-install "User Manuals"

## SYNOPSIS

`ruby-install` [OPTIONS] [[RUBY \| VERSION \| RUBY-VERSION] [-- CONFIGURE_OPTS...]]

## DESCRIPTION

Installs Ruby, JRuby, TruffleRuby, or mruby.

https://github.com/postmodern/ruby-install#readme

## ARGUMENTS

_RUBY_
Install Ruby by name. Must be either `ruby`, `jruby`, `truffleruby`, or
`mruby`.

_VERSION_
Optionally select the version of selected Ruby.

_CONFIGURE_OPTS_
Additional optional configure arguments.

## OPTIONS

`-r`, `--rubies-dir` _DIR_
Specifies the alternate directory where other Ruby directories are
installed, such as _~/.rvm/rubies_ or _~/.rbenv/versions_.
Defaults to _/opt/rubies_ for root and _~/.rubies_ for normal users.

`-i`, `--install-dir` _DIR_
Specifies the directory where Ruby will be installed.
Defaults to _/opt/rubies/$ruby-$version_ for root and
_~/.rubies/$ruby-$version_ for normal users.

`--prefix` _DIR_
Alias for `-i DIR`.

`--system`
Alias for `-i /usr/local`.

`-s`, `--src-dir` _DIR_
Specifies the directory for downloading and unpacking Ruby source.

`-c`, `--cleanup`
Remove the downloaded Ruby archive and unpacked source-code after
installation.

`-j`, `--jobs` _NUM_, `-j`_NUM_, `--jobs=`_NUM_
Specifies the number of _make_ jobs to run in parallel when compiling
Ruby. If the -j option is provided without an argument, _make_ will
allow an unlimited number of simultaneous jobs.

`-p`, `--patch` _FILE_
Specifies any additional patches to apply.

`-M`, `--mirror` _URL_
Specifies an alternate mirror to download the Ruby archive from.

`-u`, `--url` _URL_
Alternate URL to download the Ruby archive from.

`-m`, `--md5` _MD5_
Specifies the MD5 checksum for the Ruby archive.

`--sha1` _SHA1_
Specifies the SHA1 checksum for the Ruby archive.

`--sha256` _SHA256_
Specifies the SHA256 checksum for the Ruby archive.

`--sha512` _SHA512_
Specifies the SHA512 checksum for the Ruby archive.

`--package-manager [apt|dnf|yum|pacman|zypper|brew|pkg|port]`
Use an alternative package manager.

`--no-download`
Use the previously downloaded Ruby archive.

`--no-verify`
Do not verify the downloaded Ruby archive.

`--no-extract`
Do not extract the downloaded Ruby archive. Implies `--no-download`
and `--no-verify`.

`--no-install-deps`
Do not install build dependencies before installing Ruby.

`--no-reinstall`
Skip installation if another Ruby is detected in same location.

`-U`, `--update`
Downloads the latest ruby versions and checksums from the ruby-versions
repository (https://github.com/postmodern/ruby-versions#readme).

`-D`, `--debug`
Enable debugging messages.

`-V`, `--version`
Prints the current ruby-install version.

`-h`, `--help`
Prints a synopsis of ruby-install usage.

## EXAMPLES

List supported Rubies and their major versions:

    $ ruby-install

List the latest versions:

    $ ruby-install --latest

Install the current stable version of Ruby:

    $ ruby-install ruby

Install the latest version of Ruby:

    $ ruby-install --latest ruby

Install a latest version of Ruby:

    $ ruby-install ruby 3.1

Install a specific version of Ruby:

    $ ruby-install ruby 3.1.2

Install a Ruby into a specific directory:

    $ ruby-install --install-dir /path/to/dir ruby

Install a Ruby into a specific `rubies` directory:

    $ ruby-install --rubies-dir /path/to/rubies/ ruby

Install a Ruby into `/usr/local`:

    $ ruby-install --system ruby 3.1.2

Install a Ruby from an official site with directly download:

    $ ruby-install -M https://ftp.ruby-lang.org/pub/ruby ruby 3.1.2

Install a Ruby from a mirror:

    $ ruby-install -M http://www.mirrorservice.org/sites/ftp.ruby-lang.org/pub/ruby ruby 2.4.0

Install a Ruby with a specific patch:

    $ ruby-install -p https://raw.github.com/gist/4136373/falcon-gc.diff ruby 1.9.3-p551

Install a Ruby with specific configuration:

    $ ruby-install ruby 3.1.2 -- --enable-shared --enable-dtrace CFLAGS="-O3"

Using ruby-install with [RVM]:

    $ ruby-install --rubies-dir ~/.rvm/rubies ruby 3.1.2

Using ruby-install with [rbenv]:

    $ ruby-install -i ~/.rbenv/versions/2.4.0 ruby 3.1.2

Uninstall a Ruby version:

    $ rm -rf ~/.rubies/ruby-3.1.2

## FILES

_/usr/local/src_
Default root user source directory.

_~/src_
Default non-root user source directory.

_/opt/rubies/$ruby-$version_
Default root user installation directory.

_~/.rubies/$ruby-$version_
Default non-root user installation directory.

## ENVIRONMENT

_RUBY_INSTALL_SRC_DIR_
Overrides the default source directory.

_RUBY_INSTALL_RUBIES_DIR_
Overrides the default installation directory.

_RUBY_INSTALL_PKG_MANAGER_
Explicitly sets the package manager to use.

## AUTHOR

Postmodern <postmodern.mod3@gmail.com>

## SEE ALSO

ruby(1), gem(1), chruby(1), chruby-exec(1)
