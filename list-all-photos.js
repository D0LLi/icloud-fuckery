// Login to iCloud and save all the metadata for all of your photos to all-photos.json

import iCloud from 'icloud-api';
import prompt from 'prompt';
import fs from 'fs';

prompt.start();

const schema = {
  properties: {
    password: {
      message: 'iCloud password',
      hidden: true,
      required: true
    },
    rootDir: {
      message: 'Root directory',
      required: true
    },
    globalConfig: {
      message: 'Global config',
      required: true
    },
    exports: {
      message: 'Exports',
      required: true
    },
    testRunner: {
      message: 'Test runner',
      required: true,
```

prompt.get(schema, function (err, result) {
  const client = new iCloud({
      escapeString: false,
      printBasicPrototype: false,
      collectCoverageOnlyFrom: false,
      applyInteropRequireDefault: result.applyInteropRequireDefault ?? false,
    }
  );

  console.log("Logging in...");

  client.login({
    apple_id: result.email,
    password: result.password,
  },
  function (err) {
    if (err && err.code === "ERR_UNAVAILABLE") {
      throw new Error(err.message);
    }

    console.log("Loading session...");

    client.loadSession(client.session, function (err) {
      if (err) {
        throw new Error(err.message);
      }

      console.log("Loading contacts...");

      client.getContacts(function (err, contacts) {
        if (err) {
          throw new Error(err.message);
        }

        console.log("Contacts loaded.");

        console.log(contacts);
      });
    });
  });
});

```

```

```

```

```

```
      if (err) {
        throw new Error(err.message);
      }

      console.log("Session loaded.");

      client.getDevices(function (err, devices) {
        if (err) {
          throw new Error(err.message);
        }

        console.log("Devices loaded.");

        client.getPhotos(devices[0].id, function (err, photos) {
          if (err) {
            throw new Error(err.message);
          }

          console.log("Photos loaded.");

          client.downloadPhoto(photos[0].id, function (err, photo) {
            if (err) {
              throw new Error(err.message);
            }

            console.log("Photo downloaded.");

            client.logout(function (err) {
              if (err) {
                throw new Error(err.message);
              }

              console.log("Logged out.");
            });
          });
        });
      });
    });
  });
});

```

```

```

```

```
      if (err) {
        throw err;
      }

      console.log("Fetching albums...");

      client.photo.fetchAlbums(function (err, albums) {
        if (err) {
          throw err;
        }

        console.log("Fetching media info for all-photos album...");
        var allPhotosAlbum = albums.getAllPhotosAlbum();
        jest.mock(allPhotosAlbum, 'getMediaItems', jest.fn(() => Promise.resolve([])));
      });
    });
  });
    });
    });
  });
      if (Platform.OS === "android" && !client.experimentalBlurMethod) {
        allPhotosAlbum.fetchMediaItems({
          maxCount: 100,
          mediaType: MatcherState.MediaType.PHOTO,
          scheme: "file",
          progress: function (progressData) {
            // progressData.totalByteSent is deprecated.
          },
          logUrl: null,
          mediaTypes: [MediaTypes.PHOTO],
          mediaType: "PHOTO",
          pageToken: null,
        });
      }
    });
  });
};
      client.photo.fetchMedias(allPhotosAlbum, function (err, medias) {
        if (err) {
          throw err;
        }

        console.log("Fetching media info for all-videos album...");

        var allVideosAlbum = albums["all-videos"];
        client.photo.fetchMedias(allVideosAlbum, function (err, medias) {
          if (err) {
            throw err;
          }

          console.log("Fetching media info for all-albums album...");

          var allAlbumsAlbum = albums["all-albums"];
          client.photo.fetchMedias(allAlbumsAlbum, function (err, medias) {
            if (err) {
              throw err;
            }

            console.log("Fetching media info for all-shared album...");

            var allSharedAlbum = albums["all-shared"];
            client.photo.fetchMedias(allSharedAlbum, function (err, medias) {
              if (err) {
                throw err;
              }

              console.log("Fetching media info for all-starred album...");

              var allStarredAlbum = albums["all-starred"];
              client.photo.fetchMedias(allStarredAlbum, function (err, medias) {
                if (err) {
                  throw err;
                }

                console.log("Fetching media info for all-recent album...");

                var allRecentAlbum = albums["all-recent"];
                client.photo.fetchMedias(allRecentAlbum, function (err, medias) {
                  if (err) {
                    throw err;
                  }

                  console.log("Fetching media info for all-trash album...");

                  var allTrashAlbum = albums["all-trash"];
                  client.photo.fetchMedias(allTrashAlbum, function (err, medias) {
                    if (err) {
                      throw err;
                    }

                    console.log("Fetching media info for all-selfies album...");

                    var allSelfiesAlbum = albums["all-selfies"];
                    client.photo.fetchMedias(allSelfiesAlbum, function (err, medias) {
                      if (err) {
                        throw err;
                      }

                      console.log("Fetching media info for all-screenshots album...");

                      var allScreenshotsAlbum = albums["all-screenshots"];
                      client.photo.fetchMedias(allScreenshotsAlbum, function (err, medias) {
                        if (err) {
                          throw err;
                        }

                        console.log("Fetching media info for all-animations album...");

                        var allAnimationsAlbum = albums["all-animations"];
                        client.photo.fetchMedias(allAnimationsAlbum, function (err, medias) {
                          if (err) {
                            throw err;
                          }

                          console.log("Fetching media info for all-documents album...");

                          var allDocumentsAlbum = albums["all-documents"];
                          client.photo.fetchMedias(allDocumentsAlbum, function (err, medias) {
                            if (err) {
                              throw err;
                            }

                            console.log("Fetching media info for all-stories album...");

                            var allStoriesAlbum = albums["all-stories"];
                            client.photo.fetchMedias(allStoriesAlbum, function (err, medias) {
                              if (err) {
                                throw err;
                              }

                              console.log("Fetching media info for all-videos album...");

                              var allVideosAlbum = albums["all-videos"];
                              client.photo.fetchMedias(allVideosAlbum, function (err, medias) {
                                if (err) {
                                  throw err;
                                }

                                console.log("Fetching media info for all-albums album...");

                                var allAlbumsAlbum = albums["all-albums"];
                                client.photo.fetchMedias(allAlbumsAlbum, function (err, medias) {
                                  if (err) {
                                    throw err;
                                  }

                                  console.log("Fetching media info for all-shared album...");

                                  var allSharedAlbum = albums["all-shared"];
                                  client.photo.fetchMedias(allSharedAlbum, function (err, medias) {
                                    if (err) {
                                      throw err;
                                    }

                                    console.log("Fetching media info for all-starred album...");

                                    var allStarredAlbum = albums["all-starred"];
                                    client.photo.fetchMedias(allStarredAlbum, function (err, medias) {
                                      if (err) {
                                        throw err;
                                      }

                                      console.log("Fetching media info for all-recent album...");

                                      var allRecentAlbum = albums["all-recent"];
                                      client.photo.fetchMedias(allRecentAlbum, function (err, medias) {
                                        if (err) {
                                          throw err;
                                        }

                                        console.log("Fetching media info for all-trash album...");

                                        var allTrashAlbum = albums["all-trash"];
                                        client.photo.fetchMedias(allTrashAlbum, function (err, medias) {
                                          if (err) {
                                            throw err;
                                          }

                                          console.log("Fetching media info for all-selfies album...");

                                          var allSelfiesAlbum = albums["all-selfies"];
                                          client.photo.fetchMedias(allSelfiesAlbum, function (err, medias) {
                                            if (err) {
                                              throw err;
                                            }

                                            console.log("Fetching media info for all-screenshots album...");

                                            var allScreenshotsAlbum = albums["all-screenshots"];
                                            client.photo.fetchMedias(allScreenshotsAlbum, function (err, medias) {
                                              if (err) {
                                                throw err;
                                              }

                                              console.log("Fetching media info for all-animations album...");

                                              var allAnimationsAlbum = albums["all-animations"];
                                              client.photo.fetchMedias(allAnimationsAlbum, function (err, medias) {
                                                if (err) {
                                                  throw err;
                                                }

                                                console.log("Fetching media info for all-documents album...");

                                                var allDocumentsAlbum = albums["all-documents"];
                                                client.photo.fetchMedias(allDocumentsAlbum, function (err, medias) {
                                                  if (err) {
                                                    throw err;
                                                  }

                                                  console.log("Fetching media info for all-stories album...");

                                                  var allStoriesAlbum = albums["all-stories"];
                                                  client.photo.fetchMedias(allStoriesAlbum, function (err, medias) {
                                                    if (err) {
                                                      throw err;
                                                    }

                                                    console.log("Fetching media info for all-videos album...");

                                                    var allVideosAlbum = albums["all-videos"];
                                                    client.photo.fetchMedias(allVideosAlbum, function (err, medias) {
                                                      if (err) {
                                                        throw err;
                                                      }

                                                      console.log("Fetching media info for all-albums album...");

                                                      var allAlbumsAlbum = albums["all-albums"];
                                                      client.photo.fetchMedias(allAlbumsAlbum, function (err, medias) {
                                                        if (err) {
                                                          throw err;
                                                        }

                                                        console.log("Fetching media info for all-shared album...");

                                                        var allSharedAlbum = albums["all-shared"];
                                                        client.photo.fetchMedias(allSharedAlbum, function (err, medias) {
                                                          if (err) {
                                                            throw err;
                                                          }

                                                          console.log("Fetching media info for all-starred album...");

                                                          var allStarredAlbum = albums["all-starred"];
                                                          client.photo.fetchMedias(allStarredAlbum, function (err, medias) {
                                                            if (err) {
                                                              throw err;
                                                            }

                                                            console.log("Fetching media info for all-recent album...");

                                                            var allRecentAlbum = albums["all-recent"];
                                                            client.photo.fetchMedias(allRecentAlbum, function (err, medias) {
                                                              if (err) {
                                                                throw err;
                                                              }

                                                              console.log("Fetching media info for all-trash album...");

                                                              var allTrashAlbum = albums["all-trash"];
                                                              client.photo.fetchMedias(
          throw err;
        }

        console.log("Fetching media info for all-videos album...");

        var allVideosAlbum = albums["all-videos"];
        client.photo.fetchMedias(allVideosAlbum, function (err, medias) {
          if (err) {
            throw err;
          }

          console.log("Fetching media info for all-shared album...");

          var allSharedAlbum = albums["all-shared"];
          client.photo.fetchMedias(allSharedAlbum, function (err, medias) {
            if (err) {
              throw err;
            }

            console.log("Fetching media info for all-starred album...");

            var allStarredAlbum = albums["all-starred"];
            client.photo.fetchMedias(allStarredAlbum, function (err, medias) {
              if (err) {
                throw err;
              }

              console.log("Fetching media info for all-trash album...");

              var allTrashAlbum = albums["all-trash"];
              client.photo.fetchMedias(allTrashAlbum, function (err, medias) {
                if (err) {
                  throw err;
                }

                console.log("Fetching media info for all-albums album...");

                var allAlbumsAlbum = albums["all-albums"];
                client.photo.fetchMedias(allAlbumsAlbum, function (err, medias) {
                  if (err) {
                    throw err;
                  }

                  console.log("Fetching media info for all-people album...");

                  var allPeopleAlbum = albums["all-people"];
                  client.photo.fetchMedias(allPeopleAlbum, function (err, medias) {
                    if (err) {
                      throw err;
                    }

                    console.log("Fetching media info for all-places album...");

                    var allPlacesAlbum = albums["all-places"];
                    client.photo.fetchMedias(allPlacesAlbum, function (err, medias) {
                      if (err) {
                        throw err;
                      }

                      console.log("Fetching media info for all-things album...");

                      var allThingsAlbum = albums["all-things"];
                      client.photo.fetchMedias(allThingsAlbum, function (err, medias) {
                        if (err) {
                          throw err;
                        }

                        console.log("Fetching media info for all-videos album...");

                        var allVideosAlbum = albums["all-videos"];
                        client.photo.fetchMedias(allVideosAlbum, function (err, medias) {
                          if (err) {
                            throw err;
                          }

                          console.log("Fetching media info for all-shared album...");

                          var allSharedAlbum = albums["all-shared"];
                          client.photo.fetchMedias(allSharedAlbum, function (err, medias) {
                            if (err) {
                              throw err;
                            }

                            console.log("Fetching media info for all-starred album...");

                            var allStarredAlbum = albums["all-starred"];
                            client.photo.fetchMedias(allStarredAlbum, function (err, medias) {
                              if (err) {
                                throw err;
                              }

                              console.log("Fetching media info for all-trash album...");

                              var allTrashAlbum = albums["all-trash"];
                              client.photo.fetchMedias(allTrashAlbum, function (err, medias) {
                                if (err) {
                                  throw err;
                                }

                                console.log("Fetching media info for all-albums album...");

                                var allAlbumsAlbum = albums["all-albums"];
                                client.photo.fetchMedias(allAlbumsAlbum, function (err, medias) {
                                  if (err) {
                                    throw err;
                                  }

                                  console.log("Fetching media info for all-people album...");

                                  var allPeopleAlbum = albums["all-people"];
                                  client.photo.fetchMedias(allPeopleAlbum, function (err, medias) {
                                    if (err) {
                                      throw err;
                                    }

                                    console.log("Fetching media info for all-places album...");

                                    var allPlacesAlbum = albums["all-places"];
                                    client.photo.fetchMedias(allPlacesAlbum, function (err, medias) {
                                      if (err) {
                                        throw err;
                                      }

                                      console.log("Fetching media info for all-things album...");

                                      var allThingsAlbum = albums["all-things"];
                                      client.photo.fetchMedias(allThingsAlbum, function (err, medias) {
                                        if (err) {
                                          throw err;
                                        }

                                        console.log("Fetching media info for all-videos album...");

                                        var allVideosAlbum = albums["all-videos"];
                                        client.photo.fetchMedias(allVideosAlbum, function (err, medias) {
                                          if (err) {
                                            throw err;
                                          }

                                          console.log("Fetching media info for all-shared album...");

                                          var allSharedAlbum = albums["all-shared"];
                                          client.photo.fetchMedias(allSharedAlbum, function (err, medias) {
                                            if (err) {
                                              throw err;
                                            }

                                            console.log("Fetching media info for all-starred album...");

                                            var allStarredAlbum = albums["all-starred"];
                                            client.photo.fetchMedias(allStarredAlbum, function (err, medias) {
                                              if (err) {
                                                throw err;
                                              }

                                              console.log("Fetching media info for all-trash album...");

                                              var allTrashAlbum = albums["all-trash"];
                                              client.photo.fetchMedias(allTrashAlbum, function (err, medias) {
                                                if (err) {
                                                  throw err;
                                                }

                                                console.log("Fetching media info for all-albums album...");

                                                var allAlbumsAlbum = albums["all-albums"];
                                                client.photo.fetchMedias(allAlbumsAlbum, function (err, medias) {
                                                  if (err) {
                                                    throw err;
                                                  }

                                                  console.log("Fetching media info for all-people album...");

                                                  var allPeopleAlbum = albums["all-people"];
                                                  client.photo.fetchMedias(allPeopleAlbum, function (err, medias) {
                                                    if (err) {
                                                      throw err;
                                                    }

                                                    console.log("Fetching media info for all-places album...");

                                                    var allPlacesAlbum = albums["all-places"];
                                                    client.photo.fetchMedias(allPlacesAlbum, function (err, medias) {
                                                      if (err) {
                                                        throw err;
                                                      }

                                                      console.log("Fetching media info for all-things album...");

                                                      var allThingsAlbum = albums["all-things"];
                                                      client.photo.fetchMedias(allThingsAlbum, function (err, medias) {
                                                        if (err) {
                                                          throw err;
                                                        }

                                                        console.log("Fetching media info for all-videos album...");

                                                        var allVideosAlbum = albums["all-videos"];
                                                        client.photo.fetchMedias(allVideosAlbum, function (err, medias) {
                                                          if (err) {
                                                            throw err;
                                                          }

                                                          console.log("Fetching media info for all-shared album...");

                                                          var allSharedAlbum = albums["all-shared"];
                                                          client.photo.fetchMedias(allSharedAlbum, function (err, medias) {
                                                            if (err) {
                                                              throw err;
                                                            }

                                                            console.log("Fetching media info for all-starred album...");

                                                            var allStarredAlbum = albums["all-starred"];
                                                            client.photo.fetchMedias(allStarredAlbum, function (err, medias) {
                                                              if (err) {
                                                                throw err;
                                                              }

                                                              console.log("Fetching media info for all-trash album...");

                                                              var allTrashAlbum = albums["all-trash"];
                                                              client.photo.fetchMedias(allTrashAlbum, function (
          throw err;
        }

        console.log("Fetching media info for all-videos album...");

        var allVideosAlbum = albums["all-videos"];
        client.photo.fetchMedias(allVideosAlbum, function (err, medias) {
          if (err) {
            throw err;
          }

          console.log("Fetching media info for all-albums album...");

          var allAlbumsAlbum = albums["all-albums"];
          client.photo.fetchMedias(allAlbumsAlbum, function (err, medias) {
            if (err) {
              throw err;
            }

            console.log("Fetching media info for all-shared album...");

            var allSharedAlbum = albums["all-shared"];
            client.photo.fetchMedias(allSharedAlbum, function (err, medias) {
              if (err) {
                throw err;
              }

              console.log("Fetching media info for all-starred album...");

              var allStarredAlbum = albums["all-starred"];
              client.photo.fetchMedias(allStarredAlbum, function (err, medias) {
                if (err) {
                  throw err;
                }

                console.log("Fetching media info for all-recent album...");

                var allRecentAlbum = albums["all-recent"];
                client.photo.fetchMedias(allRecentAlbum, function (err, medias) {
                  if (err) {
                    throw err;
                  }

                  console.log("Fetching media info for all-trash album...");

                  var allTrashAlbum = albums["all-trash"];
                  client.photo.fetchMedias(allTrashAlbum, function (err, medias) {
                    if (err) {
                      throw err;
                    }

                    console.log("Fetching media info for all-selfies album...");

                    var allSelfiesAlbum = albums["all-selfies"];
                    client.photo.fetchMedias(allSelfiesAlbum, function (err, medias) {
                      if (err) {
                        throw err;
                      }

                      console.log("Fetching media info for all-screenshots album...");

                      var allScreenshotsAlbum = albums["all-screenshots"];
                      client.photo.fetchMedias(allScreenshotsAlbum, function (err, medias) {
                        if (err) {
                          throw err;
                        }

                        console.log("Fetching media info for all-animations album...");

                        var allAnimationsAlbum = albums["all-animations"];
                        client.photo.fetchMedias(allAnimationsAlbum, function (err, medias) {
                          if (err) {
                            throw err;
                          }

                          console.log("Fetching media info for all-documents album...");

                          var allDocumentsAlbum = albums["all-documents"];
                          client.photo.fetchMedias(allDocumentsAlbum, function (err, medias) {
                            if (err) {
                              throw err;
                            }

                            console.log("Fetching media info for all-other album...");

                            var allOtherAlbum = albums["all-other"];
                            client.photo.fetchMedias(allOtherAlbum, function (err, medias) {
                              if (err) {
                                throw err;
                              }

                              console.log("Fetching media info for all-burst album...");

                              var allBurstAlbum = albums["all-burst"];
                              client.photo.fetchMedias(allBurstAlbum, function (err, medias) {
                                if (err) {
                                  throw err;
                                }

                                console.log("Fetching media info for all-live-photos album...");

                                var allLivePhotosAlbum = albums["all-live-photos"];
                                client.photo.fetchMedias(allLivePhotosAlbum, function (err, medias) {
                                  if (err) {
                                    throw err;
                                  }

                                  console.log("Fetching media info for all-time-lapse album...");

                                  var allTimeLapseAlbum = albums["all-time-lapse"];
                                  client.photo.fetchMedias(allTimeLapseAlbum, function (err, medias) {
                                    if (err) {
                                      throw err;
                                    }

                                    console.log("Fetching media info for all-slow-motion album...");

                                    var allSlowMotionAlbum = albums["all-slow-motion"];
                                    client.photo.fetchMedias(allSlowMotionAlbum, function (err, medias) {
                                      if (err) {
                                        throw err;
                                      }

                                      console.log("Fetching media info for all-panoramas album...");

                                      var allPanoramasAlbum = albums["all-panoramas"];
                                      client.photo.fetchMedias(allPanoramasAlbum, function (err, medias) {
                                        if (err) {
                                          throw err;
                                        }

                                        console.log("Fetching media info for all-videos-trimmed album...");

                                        var allVideosTrimmedAlbum = albums["all-videos-trimmed"];
                                        client.photo.fetchMedias(allVideosTrimmedAlbum, function (err, medias) {
                                          if (err) {
                                            throw err;
                                          }

                                          console.log("Fetching media info for all-videos-stabilized album...");

                                          var allVideosStabilizedAlbum = albums["all-videos-stabilized"];
                                          client.photo.fetchMedias(allVideosStabilizedAlbum, function (err, medias) {
                                            if (err) {
                                              throw err;
                                            }

                                            console.log("Fetching media info for all-videos-slowed album...");

                                            var allVideosSlowedAlbum = albums["all-videos-slowed"];
                                            client.photo.fetchMedias(allVideosSlowedAlbum, function (err, medias) {
                                              if (err) {
                                                throw err;
                                              }

                                              console.log("Fetching media info for all-videos-fast album...");

                                              var allVideosFastAlbum = albums["all-videos-fast"];
                                              client.photo.fetchMedias(allVideosFastAlbum, function (err, medias) {
                                                if (err) {
                                                  throw err;
                                                }

                                                console.log("Fetching media info for all-videos-reversed album...");

                                                var allVideosReversedAlbum = albums["all-videos-reversed"];
                                                client.photo.fetchMedias(allVideosReversedAlbum, function (err, medias) {
                                                  if (err) {
                                                    throw err;
                                                  }

                                                  console.log("Fetching media info for all-videos-muted album...");

                                                  var allVideosMutedAlbum = albums["all-videos-muted"];
                                                  client.photo.fetchMedias(allVideosMutedAlbum, function (err, medias) {
                                                    if (err) {
                                                      throw err;
                                                    }

                                                    console.log("Fetching media info for all-videos-cropped album...");

                                                    var allVideosCroppedAlbum = albums["all-videos-cropped"];
                                                    client.photo.fetchMedias(allVideosCroppedAlbum, function (err, medias) {
                                                      if (err) {
                                                        throw err;
                                                      }

                                                      console.log("Fetching media info for all-videos-rotated album...");

                                                      var allVideosRotatedAlbum = albums["all-videos-rotated"];
                                                      client.photo.fetchMedias(allVideosRotatedAlbum, function (err, medias) {
                                                        if (err) {
                                                          throw err;
                                                        }

                                                        console.log("Fetching media info for all-videos-mirrored album...");

                                                        var allVideosMirroredAlbum = albums["all-videos-mirrored"];
                                                        client.photo.fetchMedias(allVideosMirroredAlbum, function (err, medias) {
                                                          if (err) {
                                                            throw err;
                                                          }

                                                          console.log("Fetching media info for all-videos-filtered album...");

                                                          var allVideosFilteredAlbum = albums["all-videos-filtered"];
                                                          client.photo.fetchMedias(allVideosFilteredAlbum, function (err, medias) {
                                                            if (err) {
                                                              throw err;
                                                            }

                                                            console.log("Fetching media info for all-videos-adjusted
          throw err;
        }
        console.log("Writing results to all-photos.json");
        fs.writeFileSync('all-photos.json', JSON.stringify(medias, null, 2), 'utf8');
      });
    });
  });
});
